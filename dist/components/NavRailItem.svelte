<script lang="ts">import { location } from "../stores/location";
import Tooltip from "./Tooltip.svelte";
import Icon from "./icons/Icon.svelte";
let {
  label,
  icon,
  href,
  disabled = false,
  onclick
} = $props();
const active = $derived(href && $location.pathname === href || $location.pathname.startsWith(`${href}/`) || null);
</script>

<a href={!disabled ? href : null} data-active={active} aria-label={label} aria-disabled={Boolean(disabled)} {onclick}>
    <Icon name={icon} />
</a>
{#if typeof disabled === "string"}
    <Tooltip tooltip={disabled} placement="right" />
{:else}
    <Tooltip tooltip={label} placement="right" />
{/if}

<style>
    @layer components {
        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--spacing-sm);

            height: 40px;
            padding: var(--spacing-md) var(--spacing-inset);
            color: var(--theme-text-base);
            border-radius: var(--rounded-lg);
            white-space: nowrap;
        }
        a[data-active] {
            color: var(--theme-text-base);
            background-color: var(--theme-button-active);
        }
        a:hover:not([aria-disabled="true"]) {
            color: var(--theme-text-base);
            background-color: var(--theme-button-hover);
        }
        a[aria-disabled="true"] {
            color: var(--theme-text-disabled);
            cursor: not-allowed;
        }
    }
</style>
