<script lang="ts">import Clickable from "./utils/Clickable.svelte";
let {
  label,
  href,
  disabled = false,
  children,
  onclick
} = $props();
</script>

<li role="menuitem" data-disabled={disabled ? "true" : undefined}>
    <Clickable {label} {href} {disabled} {onclick}>
        {@render children()}
    </Clickable>
</li>

<style>
    @layer components {
        li {
            display: flex;
            width: 100%;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) var(--spacing-md);
            line-height: var(--line-height-sm);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
        }
        li:hover {
            background-color: var(--theme-button-hover);
        }
        li[data-disabled="true"] {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
</style>
