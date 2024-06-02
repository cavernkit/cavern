<script lang="ts">let {
  spacing = "none",
  justify,
  class: className,
  children
} = $props();
</script>

<div class={className ? `XStack ${className}` : "XStack"} data-spacing={spacing} data-justify={justify}>
    {@render children()}
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
