<script lang="ts">
    import type { ComputePositionReturn, Placement, Side } from "@floating-ui/dom";
    import * as dom from "@floating-ui/dom";
    import type { Snippet } from "svelte";
    import { onMount } from "svelte";

    let {
        open = false,
        role,
        arrow = true,
        offset = 8,
        interactive = false,
        placement = "top",
        strategy = "absolute",
        trigger = "hover",
        class: className,
        for: reference,
        onshow,
        onhide,
        children,
    }: {
        open?: boolean;
        role?: "tooltip" | "menu" | "listbox";
        arrow?: boolean;
        offset?: number;
        interactive?: boolean;
        placement?: Placement;
        strategy?: "absolute" | "fixed";
        trigger?: "hover" | "click" | "focus";
        class?: string;
        for?: string;
        onshow?: () => void;
        onhide?: () => void;
        children: Snippet;
    } = $props();

    const clickable = $derived(trigger === "click");
    const hoverable = $derived(trigger === "hover");

    let referenceEl: Element = $state(document.body);
    let contentEl: HTMLElement | undefined = $state();
    let floatingEl: HTMLElement;
    let arrowEl: HTMLElement | undefined;
    let triggerEls: HTMLElement[] = [];

    // Handle race condition between focusin and click events
    let _blocked: boolean = false;
    const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));

    const hasHover = (el: Element) => el.matches(":hover");
    const hasFocus = (el: Element) => el.contains(document.activeElement);
    const px = (n: number | undefined) => (n != null ? `${n}px` : "");

    const showHandler = (ev: Event) => {
        if (!reference && triggerEls.includes(ev.target as HTMLElement) && referenceEl !== ev.target) {
            referenceEl = ev.target as HTMLElement;
            block();
        }
        if (clickable && ev.type === "focusin" && !open) {
            block();
        }
        open = clickable && ev.type === "click" && !_blocked ? !open : true;
        onshow?.();
    };
    const hideHandler = (ev: Event) => {
        if (interactive) {
            setTimeout(() => {
                const elements = [referenceEl, floatingEl, ...triggerEls].filter(Boolean);
                if (ev.type === "mouseleave" && elements.some(hasHover)) {
                    return;
                }
                if (ev.type === "focusout" && elements.some(hasFocus)) {
                    return;
                }
                open = false;
                onhide?.();
            }, 100);
        } else if (open) {
            open = false;
            onhide?.();
        }
    };
    function handleIf(pred: boolean, func: (ev: Event) => void) {
        return pred ? func : () => undefined;
    }

    const oppositeSideMap = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
    } as const;
    let arrowSide: Side = $state(oppositeSideMap[placement.split("-")[0] as Side]);

    const middleware = $derived([
        dom.flip(),
        dom.shift(),
        dom.offset(+offset),
        arrowEl && dom.arrow({ element: arrowEl, padding: 10 }),
    ]);
    function init(node: HTMLElement) {
        floatingEl = node;

        let cleanup = dom.autoUpdate(referenceEl, floatingEl, updatePosition);
        return {
            update(_referenceEl: HTMLElement) {
                cleanup();
                cleanup = dom.autoUpdate(referenceEl, floatingEl, updatePosition);
            },
            destroy() {
                cleanup();
            },
        };
    }
    function initArrow(node: HTMLElement) {
        arrowEl = node;
        return {
            destroy() {
                arrowEl = undefined;
            },
        };
    }
    function updatePosition() {
        void dom
            .computePosition(referenceEl, floatingEl, {
                placement,
                strategy,
                middleware,
            })
            .then(({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
                floatingEl.style.position = strategy;
                floatingEl.style.left = px(x);
                floatingEl.style.top = px(y);

                if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
                    arrowEl.style.left = px(middlewareData.arrow.x);
                    arrowEl.style.top = px(middlewareData.arrow.y);

                    arrowSide = oppositeSideMap[placement.split("-")[0] as Side];
                    arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2);
                }
            });
    }
    onMount(() => {
        const events: [string, (event: Event) => void, boolean][] = [
            // show and hide the handler when focus changes (e.g. for a button or input)
            ["focusin", showHandler, true],
            ["focusout", hideHandler, true],
            ["click", showHandler, clickable],
            ["mouseenter", showHandler, hoverable],
            ["mouseleave", hideHandler, hoverable],
        ];

        triggerEls = contentEl?.previousElementSibling ? [contentEl.previousElementSibling as HTMLElement] : [];
        for (const element of triggerEls) {
            // trigger must be focusable
            if (element.tabIndex < 0) {
                element.tabIndex = 0;
            }
            for (const [name, handler, cond] of events) {
                if (cond) {
                    element.addEventListener(name, handler);
                }
            }
        }
        if (reference) {
            referenceEl = document.querySelector(reference) ?? document.body;
            if (referenceEl === document.body) {
                console.error(`Popup reference not found: '${reference}'`);
            } else {
                referenceEl.addEventListener("focusout", hideHandler);
                if (hoverable) {
                    referenceEl.addEventListener("mouseleave", hideHandler);
                }
            }
        } else if (triggerEls.length) {
            referenceEl = triggerEls[0];
        } else if (contentEl?.parentElement) {
            referenceEl = contentEl.parentElement;
        } else {
            console.error(`Popup has no trigger`);
            referenceEl = document.body;
        }

        // if the reference element already has focus, show the popup
        if (referenceEl === document.activeElement) {
            open = true;
        }

        // onDestroy
        return () => {
            for (const element of triggerEls) {
                if (element) {
                    for (const [name, handler] of events) {
                        element.removeEventListener(name, handler);
                    }
                }
            }
            if (referenceEl) {
                referenceEl.removeEventListener("focusout", hideHandler);
                referenceEl.removeEventListener("mouseleave", hideHandler);
            }
        };
    });
</script>

{#if referenceEl === document.body}
    <div bind:this={contentEl}></div>
{/if}

{#if open && referenceEl}
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
        use:init
        {role}
        class={className ? `Popup ${className}` : "Popup"}
        tabindex={interactive ? -1 : undefined}
        onfocusin={handleIf(interactive, showHandler)}
        onfocusout={handleIf(interactive, hideHandler)}
        onmouseenter={handleIf(interactive, showHandler)}
        onmouseleave={handleIf(interactive, hideHandler)}
    >
        {@render children()}
        {#if arrow}
            <div use:initArrow class="arrow" data-placement={arrowSide}></div>
        {/if}
    </div>
{/if}

<style>
    .Popup {
        background: white;
        border: 1px solid var(--theme-border-light);
        border-radius: var(--rounded-lg);
        box-shadow:
            0 0 #0000,
            0 0 #0000,
            0 1px 2px 0 rgba(0, 0, 0, 0.05);
        z-index: var(--z-tooltip);
    }
    .Popup .arrow {
        position: absolute;
        pointer-events: none;
        display: block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        background: inherit;
        border-color: inherit;
        border-style: inherit;
        border-width: 0;
    }
    .Popup .arrow[data-placement="bottom"] {
        border-bottom-width: 1px;
        border-inline-end-width: 1px;
    }
    .Popup .arrow[data-placement="top"] {
        border-top-width: 1px;
        border-inline-start-width: 1px;
    }
    .Popup .arrow[data-placement="right"] {
        border-top-width: 1px;
        border-inline-end-width: 1px;
    }
    .Popup .arrow[data-placement="left"] {
        border-bottom-width: 1px;
        border-inline-start-width: 1px;
    }
</style>
