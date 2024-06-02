<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        spacing = "none",
        justify,
        class: className,
        children,
    }: {
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
        justify?: "left" | "center" | "right";
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<div class={className ? `XStack ${className}` : "XStack"} data-spacing={spacing} data-justify={justify}>
    {#if children}
        {@render children()}
    {/if}
</div>

<style global>
    @layer components {
        .XStack {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .XStack[data-justify="left"] {
            justify-content: start;
        }
        .XStack[data-justify="center"] {
            justify-content: center;
        }
        .XStack[data-justify="right"] {
            justify-content: end;
        }
        .XStack[data-spacing="xs"] {
            gap: var(--spacing-xs);
        }
        .XStack[data-spacing="sm"] {
            gap: var(--spacing-sm);
        }
        .XStack[data-spacing="md"] {
            gap: var(--spacing-md);
        }
        .XStack[data-spacing="lg"] {
            gap: var(--spacing-lg);
        }
        .XStack[data-spacing="xl"] {
            gap: var(--spacing-xl);
        }
    }
</style>
