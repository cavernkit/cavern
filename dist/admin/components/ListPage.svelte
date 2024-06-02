<script lang="ts">import { Icon, Input, YStack, Table } from "../..";
import { humanize, pluralize } from "../utils/inflection";
import ModelCell from "./list/ModelCell.svelte";
import { toSmartSearch } from "../utils/search";
let { model } = $props();
let paginate = $derived(model.listFeatures?.paginate);
let filters = $derived(
  !model.listFeatures?.paginate || model.listFeatures.filter ? model.listDisplay.map((x) => model.listFields[x]).filter((x) => x.type === "enum" || x.references) : []
);
let sort = $state("");
let page = $state({});
let filter = $state({});
let search = $state("");
let data = $state([]);
let meta = $state({});
$effect(() => {
  const result = model.list(paginate ? { page, filter, search, sort } : { sort });
  if (result instanceof Promise) {
    result.then((resp) => {
      data = resp.data ?? [];
      meta = resp.meta ?? {};
    });
  } else {
    data = result.data ?? [];
    meta = result.meta ?? {};
  }
});
let visible = $derived(paginate ? data : filterOnClient(data));
let total = $derived(paginate ? meta.total ?? data.length : visible.length);
function filterOnClient(all) {
  let result = all.slice();
  if (search) {
    result = [];
    let pattern = toSmartSearch(search);
    for (const row of all) {
      if (pattern.test(JSON.stringify(row))) {
        result.push(row);
      }
    }
  }
  if (filter && Object.keys(filter).length) {
    all = result;
    result = [];
    for (const row of all) {
      let matches = true;
      for (const col in filter) {
        if (filter[col] !== row[col]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        result.push(row);
      }
    }
  }
  if (sort) {
    let dir = 1;
    let column = sort.split(",")[0];
    if (column.startsWith("-")) {
      dir = -1;
      column = column.slice(1);
    }
    result.sort((a, b) => {
      if (a < b) {
        return -1 * dir;
      } else if (a > b) {
        return dir;
      }
      return 0;
    });
  }
  return result;
}
</script>

<div class="ListPage__layout">
    <YStack spacing="md">
        {#if !model.listFeatures?.paginate || model.listFeatures?.search}
            <div class="ListPage__search">
                <Input placeholder="Search" bind:value={search}>
                    {#snippet leading()}
                        <Icon name="search" />
                    {/snippet}
                </Input>
            </div>
        {/if}

        <Table>
            {#snippet thead()}
                {#each model.listDisplay as col (col)}
                    <th>{humanize(col)}</th>
                {/each}
            {/snippet}
            {#snippet tbody()}
                {#each visible as row (row.id)}
                    <tr>
                        {#each model.listDisplay as col (col)}
                            <ModelCell {row} {col} field={model.listFields[col]} />
                        {/each}
                    </tr>
                {/each}
                <tr>
                    <td colspan={model.listDisplay.length}>
                        Showing {visible.length} of {total}
                        {total > 1 ? pluralize(model.name) : model.name}
                    </td>
                </tr>
            {/snippet}
        </Table>
    </YStack>

    <div class="ListPage__filters">
        <h3>Filtering</h3>
        {#if !filters.length}
            <div class="ListPage__nofilter">No filters are available.</div>
        {/if}
    </div>
</div>

<style>
    @layer components {
        .ListPage__layout {
            display: flex;
            align-items: start;
            gap: var(--spacing-lg);
        }
        .ListPage__layout > :global(.Table) {
            flex-grow: 1;
        }
        
        /* @TODO pretty styles */
        .ListPage__filters {
            width: 250px;
            min-height: 250px;
        }
        .ListPage__filters > h3 {
            padding: 0.625rem 1rem;
            line-height: var(--line-height-sm);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
        }
        .ListPage__nofilter {
            padding: 1.25rem 1rem;
            color: var(--theme-text-light);
            font-size: var(--font-size-sm);
            line-height: var(--line-height-sm);
        }
        .ListPage__layout > :global(.Table tbody > tr:last-child) {
            color: var(--theme-text-light);
        }
    }
</style>
