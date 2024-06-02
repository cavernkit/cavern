<script scope lang="ts" context="module">
    export type Placement =
        | "top-left"
        | "top-center"
        | "top-right"
        | "center-left"
        | "center"
        | "center-right"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right";
</script>

<script lang="ts">
    import CloseButton from "./utils/CloseButton.svelte";
    import { focusTrap, makeFocusable, preventWheel, stopWheel } from "../utils/dom";
    import type { Snippet } from "svelte";

    let {
        open = $bindable(false),
        title,
        class: className,
        placement = "center",
        dismissable = true,
        ondismiss,
        children,
        header,
        footer,
    }: {
        open?: boolean;
        title?: string;
        class?: string;
        placement?: Placement;
        dismissable?: boolean;
        ondismiss?: () => void;
        children: Snippet;
        header?: Snippet;
        footer?: Snippet;
    } = $props();
    const align = $derived(placement.startsWith("top-") ? "start" : placement.startsWith("bottom-") ? "end" : "center");
    const justify = $derived(placement.endsWith("-right") ? "end" : placement.endsWith("-left") ? "start" : "center");

    const dismiss = (e: KeyboardEvent | MouseEvent) => {
        e.preventDefault();
        open = false;
        ondismiss?.();
    };
    const onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && dismissable) {
            return dismiss(e);
        }
    };
</script>

{#if open}
    <!-- Backdrop -->
    <div role="presentation" class="Backdrop"></div>

    <!-- Dialog -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        role="dialog"
        class="Modal"
        tabindex="-1"
        aria-modal="true"
        data-align={align}
        data-justify={justify}
        {onkeydown}
        use:preventWheel
        use:makeFocusable
        use:focusTrap
    >
        <div class="modal-container">
            <div class={className ? `modal-frame ${className}` : "modal-frame"}>
                <!-- Header -->
                {#if title || header}
                    <header>
                        {#if header}
                            {@render header()}
                        {:else}
                            <h3 style="font-weight:var(--font-weight-medium)">{title}</h3>
                        {/if}
                        {#if dismissable}
                            <CloseButton label="Close modal" class="close-dialog" onclick={dismiss} />
                        {/if}
                    </header>
                {/if}

                <!-- Body -->
                <div
                    role="document"
                    onkeydown={(e) => {
                        e.stopPropagation();
                        onkeydown(e);
                    }}
                    use:stopWheel
                >
                    {@render children()}
                    {#if dismissable && !title && !header}
                        <CloseButton label="Close modal" class="close-dialog" onclick={dismiss} />
                    {/if}
                </div>

                <!-- Footer -->
                {#if footer}
                    <footer>
                        {@render footer()}
                    </footer>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    @layer components {
        .Backdrop {
            position: fixed;
            top: 0;
            inset: 0;
            z-index: var(--z-modal-shadow);
            height: 100%;
            width: 100%;
            background: rgba(0.33, 0.33, 0.33, 0.5);
        }
        .Modal {
            position: fixed;
            top: 0;
            inset-inline-start: 0;
            inset-inline-end: 0;
            z-index: var(--z-modal);

            display: flex;
            width: 100%;
            height: calc(100% - 2rem);
            padding: var(--spacing-md);
        }
        .Modal[data-align="start"] {
            align-items: flex-start;
        }
        .Modal[data-align="center"] {
            align-items: center;
        }
        .Modal[data-align="end"] {
            align-items: flex-end;
        }
        .Modal[data-justify="start"] {
            justify-content: flex-start;
        }
        .Modal[data-justify="center"] {
            justify-content: center;
        }
        .Modal[data-justify="end"] {
            justify-content: flex-end;
        }
        .Modal :global(.close-dialog) {
            position: absolute;
            right: 0.75rem;
            top: 0.75rem;
        }
        .modal-container {
            position: relative;
            display: flex;
            width: 100%;
            max-height: 100%;
            max-width: 450px;
        }
        .modal-frame {
            position: relative;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 100%;
            color: var(--theme-text-base);
            background: white;
            border-radius: var(--rounded-lg);
            box-shadow: var(--shadow-md);
        }
        div[role="document"] {
            flex: 1 1 0%;

            display: flex;
            flex-direction: column;
            gap: var(--spacing-md);
            padding: var(--spacing-md);
            overflow-y: auto;
            overscroll-behavior: contain;
        }
        div[role="document"]:not(:has(*)) {
            display: none;
        }
        header {
            padding: var(--spacing-md);
            border-top-left-radius: var(--rounded-lg);
            border-top-right-radius: var(--rounded-lg);
        }
        footer {
            padding: var(--spacing-md);
            border-bottom-left-radius: var(--rounded-lg);
            border-bottom-right-radius: var(--rounded-lg);
        }

        /* divider between header, body, and footer */
        header + div[role="document"],
        div[role="document"] + footer {
            border-top: 1px solid var(--theme-border-dark);
        }

        @media (min-width: 768px) {
            div[role="dialog"] {
                inset: 0;
                height: 100%;
            }

            header,
            footer,
            div[role="document"] {
                padding-left: 1.25rem;
                padding-right: 1.25rem;
            }
        }
    }
</style>
