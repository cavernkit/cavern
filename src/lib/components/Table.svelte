<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        borders,
        class: className,
        thead,
        tbody,
    }: {
        borders?: "all" | "outside";
        class?: string;
        thead: Snippet;
        tbody: Snippet;
    } = $props();

    let scrollX: string | undefined = $state();
    const onContentScroll = (el: HTMLElement) => {
        if (el.scrollWidth === el.clientWidth) {
            scrollX = undefined;
        } else if (el.scrollLeft <= 1) {
            scrollX = "start";
        } else if (Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) <= 1) {
            scrollX = "end";
        } else {
            scrollX = "middle";
        }
    };
    function initResizeObserver(el: HTMLElement) {
        const observer = new ResizeObserver(() => onContentScroll(el));
        onContentScroll(el);
        observer.observe(el);
        return { destroy: () => observer.disconnect() };
    }
</script>

<div
    class={className ? `Table ${className}` : "Table"}
    data-borders={borders}
    data-scroll-x={scrollX}
    use:initResizeObserver
    onscroll={(e) => onContentScroll(e.currentTarget)}
>
    <table>
        <thead>
            {@render thead()}
        </thead>
        <tbody>
            {@render tbody()}
        </tbody>
    </table>
</div>

<style>
    @layer components {
        .Table {
            position: relative;
            overflow-x: auto;
            border-color: var(--theme-border-dark);
            border-style: solid;
        }

        .Table :global(table) {
            width: 100%;
            display: table;
            border-color: inherit;
            border-style: inherit;
            border-spacing: 0;
            border-collapse: separate;

            color: var(--theme-text-base);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-normal);
            line-height: var(--line-height-sm);
            text-align: left;
            text-indent: 0;
        }

        .Table :global(thead) {
            border-color: inherit;
            background-color: var(--theme-gray-bg);

            color: var(--theme-text-base);
            font-size: var(--font-size-xs);
            font-weight: var(--font-weight-normal);
            line-height: var(--line-height-xs);
        }
        .Table :global(tbody) {
            border-color: inherit;
            background-color: #fff;
        }

        .Table :global(thead > tr > th) {
            border-bottom-width: 1px;
        }
        .Table :global(tbody > tr:not(:last-child) > td) {
            border-bottom-width: 1px;
        }
        .Table :global(tr) {
            border-color: inherit;
        }

        .Table :global(th) {
            padding: 0.75rem 1rem;
            border-color: inherit;
            background-color: var(--theme-gray-bg);

            color: var(--theme-text-light);
            font-size: var(--font-size-xs);
            font-weight: var(--font-weight-normal);
            line-height: var(--line-height-xs);
            white-space: nowrap; /** use <br /> for intentional wraps */
        }
        .Table :global(td) {
            border-color: inherit;
            padding: 0.75rem;
        }
        .Table :global(td:focus-visible) {
            outline: 1px solid var(--theme-primary-fg);
        }

        /** Borders */
        .Table[data-borders="all"],
        .Table[data-borders="outside"] {
            border-top-width: 1px;
        }
        .Table[data-borders="all"] :global(tr:last-child > td),
        .Table[data-borders="outside"] :global(tr:last-child > td) {
            border-bottom-width: 1px;
        }
        .Table[data-borders="all"] :global(th),
        .Table[data-borders="all"] :global(td) {
            border-left-width: 1px;
        }
        .Table[data-borders="all"] :global(th:last-child),
        .Table[data-borders="all"] :global(td:last-child) {
            border-right-width: 1px;
        }

        /** Border Radius */
        .Table :global(table) {
            border-radius: inherit;
        }
        .Table :global(thead),
        .Table :global(thead > tr:first-child) {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }
        .Table :global(thead > tr:first-child > th:first-child) {
            border-top-left-radius: inherit;
        }
        .Table :global(thead > tr:first-child > th:last-child) {
            border-top-right-radius: inherit;
        }
        .Table :global(tbody),
        .Table :global(tbody > tr:last-child) {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
        }
        .Table :global(tbody > tr:last-child > td:first-child) {
            border-bottom-left-radius: inherit;
        }
        .Table :global(tbody > tr:last-child > td:last-child) {
            border-bottom-right-radius: inherit;
        }

        /** Checkbox Column */
        .Table :global(th:has(input[type="checkbox"])),
        .Table :global(td:has(input[type="checkbox"])) {
            width: 20px;
            padding-left: 8px;
            padding-right: 8px;
        }
        .Table :global(th > input[type="checkbox"]),
        .Table :global(td > input[type="checkbox"]) {
            margin: 0;
        }
    }
</style>
