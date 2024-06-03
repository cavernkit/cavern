<script lang="ts">import { TableDateTimeFormat } from "../../utils/format";
let {
  row,
  col,
  field
} = $props();
const value = $derived(row[col]);
const isSensitive = field.type === "password" || col === "password" || col.includes("secret");
</script>

<td data-type={field.type}>
    {#if isSensitive}
        {#if row[col]}
            ••••••••
        {/if}
    {:else if field.type === "datetime"}
        {#if row[col]}
            {TableDateTimeFormat.format(Date.parse(row[col]))}
        {/if}
    {:else if field.type !== "any"}
        {row[col]}
    {:else if value && typeof value === "object"}
        {JSON.stringify(value)}
    {/if}
</td>

<style>
    @layer components {
        [data-type="password"] {
            user-select: none;
            cursor: default;
        }
    }
</style>
