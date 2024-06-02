<script lang="ts" context="module">
    export interface Tab {
        label: string;
        value: string;
        href?: string;
    }
</script>

<script lang="ts" generics="T extends Tab = Tab">
    // Ignore `no-undef` for generics="T"
    /* eslint-disable no-undef */

    import type { Snippet } from "svelte";
    import Clickable from "./utils/Clickable.svelte";

    let {
        tabs,
        activeTab,
        children,
        onselect,
    }: {
        tabs: T[];
        activeTab: string;
        children?: Snippet<[Tab]>;
        onselect?: (tab: Tab) => void;
    } = $props();

    const selectTab = (tab: Tab) => {
        activeTab = tab.value;
        onselect?.(tab);
    };
</script>

<ul class="TabList" role="tablist">
    {#each tabs as tab}
        <li role="tab" aria-selected={activeTab === tab.value} data-tab={tab.value}>
            <Clickable label={tab.label} tabindex={activeTab === tab.value ? 0 : -1} onclick={() => selectTab(tab)}>
                {#if children}
                    {@render children(tab)}
                {:else}
                    {tab.label}
                {/if}
            </Clickable>
        </li>
    {/each}
</ul>

<style>
    .TabList {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        background: inherit;
        gap: 1rem;
        border-bottom: 1px solid var(--theme-border-dark);
    }
    .TabList > li {
        display: flex;
        height: 3rem;
        padding: 0 1rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        color: var(--theme-text-base);
        font-size: var(--font-size-sm);
        line-height: var(--font-size-sm);
        border-bottom: solid 2px transparent;
        margin-bottom: -1px;
    }
    .TabList > li[aria-selected="true"] {
        color: var(--theme-primary-fg);
        border-bottom: solid 2px var(--theme-primary-fg);
    }

    :global(.XStack) > .TabList {
        width: auto;
    }
</style>
