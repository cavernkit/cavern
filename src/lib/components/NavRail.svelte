<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        class: className,
        children,
    }: {
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<aside class={className} role="navigation" aria-label="Navigation">
    {#if children}
        {@render children()}
    {/if}
</aside>

<style>
    @layer components {
        aside {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            min-width: 64px;
            width: 64px;
            height: 100%;

            border-right: 1px solid var(--theme-border-dark);
            background: white;

            z-index: 1;
        }
    }
</style>
