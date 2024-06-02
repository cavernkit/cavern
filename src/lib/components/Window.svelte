<script lang="ts">
    import Spacer from "./layout/Spacer.svelte";
    import { preventWheel, stopWheel } from "../utils/dom";
    import type { Snippet } from "svelte";
    import CloseButton from "./utils/CloseButton.svelte";

    let {
        title,
        width,
        height,
        placement = "top-right",
        scrollable = false,
        onclose,
        children,
        actions,
        footer,
    }: {
        title: string;
        width?: string;
        height?: string;
        placement?: "top-right" | "top-left" | "bottom-left" | "bottom-right";
        scrollable?: boolean;
        onclose?: () => void;
        children: Snippet;
        actions?: Snippet;
        footer?: Snippet;
    } = $props();

    const top = placement.startsWith("top-") ? "1rem" : null;
    const right = placement.endsWith("-right") ? "1rem" : null;
    const left = placement.endsWith("-left") ? "1rem" : null;
    const bottom = placement.startsWith("bottom-") ? "1rem" : null;
    const minHeight = "300px";
    const maxHeight = height ? `min(calc(100vh - 2rem), ${height})` : `calc(100vh - 2rem)`;

    let dialog: HTMLDivElement | undefined;
    let startPos: { x: number; y: number } | null = $state(null);
    const onmousedown = (e: MouseEvent) => {
        e.preventDefault();
        startPos = { x: e.clientX, y: e.clientY };
    };
    const onmouseup = (e: MouseEvent) => {
        e.preventDefault();
        startPos = null;
    };
    const onmousemove = (e: MouseEvent) => {
        if (!startPos || !dialog) {
            return;
        }
        if (e.clientX < 0 || e.clientY < 0 || e.clientY >= window.innerHeight || e.clientX >= window.innerWidth) {
            startPos = null;
            return;
        }
        const newPosX = startPos.x - e.clientX;
        const newPosY = startPos.y - e.clientY;
        startPos.x = e.clientX;
        startPos.y = e.clientY;
        dialog.style.top = dialog.offsetTop - newPosY + "px";
        dialog.style.left = dialog.offsetLeft - newPosX + "px";
    };
</script>

<svelte:window {onmousemove} />

<div
    role="dialog"
    class="Window"
    tabindex="-1"
    aria-modal="false"
    aria-label={title}
    style:top
    style:left
    style:bottom
    style:right
    style:width
    style:height
    style:min-height={minHeight}
    style:max-height={maxHeight}
    bind:this={dialog}
    use:preventWheel
>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <header aria-grabbed={startPos ? "true" : "false"} {onmousedown} {onmouseup}>
        <h1 class="title">
            {title}
        </h1>
        <Spacer />
        {#if actions}
            {@render actions()}
        {/if}
        <div>
            <CloseButton
                label="Close window"
                class={!actions ? "close-dialog" : undefined}
                onclick={(event) => {
                    event.stopPropagation();
                    onclose?.();
                }}
            />
        </div>
    </header>
    <div role="document" data-scrollable={scrollable} use:stopWheel>
        {@render children()}
    </div>
    {#if footer}
        <footer>
            {@render footer()}
        </footer>
    {/if}
</div>

<style>
    @layer components {
        .Window {
            position: fixed;
            z-index: var(--z-window);

            display: flex;
            flex-direction: column;

            border: 1px solid var(--theme-border-dark);
            background: white;
            box-shadow: var(--shadow-xl);
        }
        .Window :global(.close-dialog) {
            position: absolute;
            right: 0.75rem;
            top: 0.75rem;
        }
        div[role="document"] {
            flex-grow: 1;
            overflow: hidden;
        }
        div[role="document"][data-scrollable="true"] {
            overflow: auto;
        }
        header {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;

            padding: 1rem;
            border-bottom: 1px solid var(--theme-border-dark);

            user-select: none;
            cursor: move; /* fallback if grab cursor is unsupported */
            cursor: grab;
        }
        header[aria-grabbed="true"] {
            cursor: grabbing;
        }
        header .title {
            font-weight: var(--font-weight-medium);
            text-transform: uppercase;
        }
        footer {
            border-top: 1px solid var(--theme-border-dark);
            padding: 1rem;
        }
    }
</style>
