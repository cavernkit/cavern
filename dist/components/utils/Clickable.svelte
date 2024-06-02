<!--
    @component

    An unstyled wrapper around another element to make it into an `<a>` or `<button>`,  
    for example to use at the top-level of tables cells (`<td>`) or list items (`<li>`).

    It uses `display: contents` to avoid affecting CSS box layout.
-->

<script lang="ts">let {
  label,
  href,
  disabled = false,
  tabindex,
  children,
  onclick
} = $props();
</script>

{#if href && !disabled}
    <a style="display:contents" {href} aria-label={label} {tabindex} {onclick}>
        {@render children()}
    </a>
{:else}
    <button style="display:contents" type="button" aria-label={label} {tabindex} {disabled} {onclick}>
        {@render children()}
    </button>
{/if}
