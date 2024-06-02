<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        spacing = "none",
        class: className,
        children,
    }: {
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<div class={className ? `YStack ${className}` : "YStack"} data-spacing={spacing}>
    {#if children}
        {@render children()}
    {/if}
</div>

<style global>
    @layer components {
        .YStack {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }
        .YStack[data-spacing="xs"] {
            gap: var(--spacing-xs);
        }
        .YStack[data-spacing="sm"] {
            gap: var(--spacing-sm);
        }
        .YStack[data-spacing="md"] {
            gap: var(--spacing-md);
        }
        .YStack[data-spacing="lg"] {
            gap: var(--spacing-lg);
        }
        .YStack[data-spacing="xl"] {
            gap: var(--spacing-xl);
        }
    }
</style>
