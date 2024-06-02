<script lang="ts">
    let {
        text = "",
        spacing = "none",
    }: {
        text?: string;
        spacing?: "none" | "sm" | "md" | "lg";
    } = $props();
</script>

<div class="Divider" data-spacing={spacing}>
    {#if text}
        <div class="line"></div>
        <div class="slot">{text}</div>
        <div class="line"></div>
    {:else}
        <div class="line"></div>
    {/if}
</div>

<style>
    @layer components {
        .Divider {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;
        }
        .Divider[data-spacing="sm"] {
            margin-top: var(--spacing-sm);
            margin-bottom: var(--spacing-sm);
        }
        .Divider[data-spacing="md"] {
            margin-top: var(--spacing-md);
            margin-bottom: var(--spacing-md);
        }
        .Divider[data-spacing="lg"] {
            margin-top: var(--spacing-lg);
            margin-bottom: var(--spacing-lg);
        }

        .slot {
            color: var(--theme-text-light);
            font-size: var(--font-size-xs);
            line-height: var(--line-height-xs);
        }
        .line {
            flex: 1 1 0%;
            height: 1px;
            background-color: var(--theme-border-dark);
        }
    }
</style>
