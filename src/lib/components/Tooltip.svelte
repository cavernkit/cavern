<script lang="ts">
    import type { Placement } from "@floating-ui/dom";
    import Popup from "./utils/Popup.svelte";

    let {
        tooltip,
        placement = "top-start",
    }: {
        tooltip: string;
        placement?: Placement;
    } = $props();
</script>

<Popup role="tooltip" {placement} class="Tooltip">
    {tooltip}
</Popup>

<style>
    @layer components {
        :global(.Tooltip) {
            min-width: fit-content;
            white-space: nowrap;
            padding: 8px 10px;
            line-height: var(--line-height-sm);
            font-size: var(--font-size-sm);
        }
    }
</style>
