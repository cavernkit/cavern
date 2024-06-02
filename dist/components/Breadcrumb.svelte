<script lang="ts">import Icon from "./icons/Icon.svelte";
let {
  links,
  class: className
} = $props();
</script>

<nav class={className} aria-label="Breadcrumb">
    <ol>
        {#each links as { label, href }, i}
            <li>
                {#if i > 0}
                    <Icon name="chevron-right" size="sm" />
                {/if}
                {#if i < links.length - 1}
                    <a {href}>{label}</a>
                {:else}
                    <a {href} aria-current="page" onclick={(e) => e.preventDefault()}>
                        {label}
                    </a>
                {/if}
            </li>
        {/each}
    </ol>
</nav>

<style>
    @layer components {
        nav {
            display: flex;
            flex-direction: row;
        }
        ol {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        li {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        li :global(svg) {
            color: var(--theme-text-light);
        }
        a {
            color: var(--theme-text-base);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-light);
            line-height: var(--line-height-sm);
            white-space: nowrap;
        }
        a[aria-current="page"] {
            font-weight: var(--font-weight-medium);
            cursor: default;
        }
    }
</style>
