<script lang="ts" context="module">
    export type Color = "dark" | "primary" | "error" | "warning" | "success" | "info";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        color = "dark",
        border = false,
        class: className,
        children,
    }: {
        color?: Color;
        border?: boolean;
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<span class={className ? `Badge ${className}` : "Badge"} data-color={color} class:border>
    {#if children}
        {@render children()}
    {:else}
        0
    {/if}
</span>

<style>
    .Badge {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-xs);

        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-normal);
        line-height: var(--line-height-xs);
        text-wrap: nowrap;

        padding: 2px 8px;
        border-radius: var(--rounded-md);

        user-select: none;
    }

    .Badge.border {
        border: 1px solid transparent;
    }

    .Badge[data-color="dark"] {
        color: var(--theme-gray-dark);
        border-color: var(--theme-gray-dark);
        background-color: var(--theme-gray-bg);
    }
    .Badge[data-color="primary"] {
        color: var(--theme-primary-dark);
        border-color: var(--theme-primary-dark);
        background-color: var(--theme-primary-bg);
    }
    .Badge[data-color="error"] {
        color: var(--theme-error-dark);
        border-color: var(--theme-error-dark);
        background-color: var(--theme-error-bg);
    }
    .Badge[data-color="warning"] {
        color: var(--theme-warning-dark);
        border-color: var(--theme-warning-dark);
        background-color: var(--theme-warning-bg);
    }
    .Badge[data-color="success"] {
        color: var(--theme-success-dark);
        border-color: var(--theme-success-dark);
        background-color: var(--theme-success-bg);
    }
    .Badge[data-color="info"] {
        color: var(--theme-info-dark);
        border-color: var(--theme-info-dark);
        background-color: var(--theme-info-bg);
    }
</style>
