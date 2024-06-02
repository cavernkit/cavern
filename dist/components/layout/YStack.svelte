<script lang="ts">let {
  spacing = "none",
  class: className,
  children
} = $props();
</script>

<div class={className ? `YStack ${className}` : "YStack"} data-spacing={spacing}>
    {@render children()}
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
