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

<!-- App Bar -->
<nav class={className}>
    {#if children}
        {@render children()}
    {/if}
</nav>

<style>
    @layer components {
        nav {
            box-sizing: border-box;
            height: 54px;
            padding: 10px 8px;
            background: white;
            border-bottom: 1px solid var(--theme-border-dark);
        }
    }
</style>
