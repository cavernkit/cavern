<script lang="ts">
    import type { Field } from "$lib/admin/model";
    import { TableDateTimeFormat } from "$lib/admin/utils/format";

    let {
        row,
        col,
        field,
    }: {
        row: any;
        col: string;
        field: Field;
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
