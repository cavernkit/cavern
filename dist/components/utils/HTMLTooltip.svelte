<script lang="ts">import Icon from "../icons/Icon.svelte";
import XStack from "../layout/XStack.svelte";
import Popup from "./Popup.svelte";
let {
  type = "warning",
  tooltip
} = $props();
</script>

<Popup class="HTMLTooltip" placement="bottom-start">
    <XStack spacing="sm">
        {#if type === "warning"}
            <div style:color="var(--html-input-validation)">
                <Icon name="circle-warning-solid" />
            </div>
        {:else}
            <div style:color="var(--theme-info-fg)">
                <Icon name="circle-info-solid" />
            </div>
        {/if}
        <div class="HTMLTooltip__message">{tooltip}</div>
    </XStack>
</Popup>

<style>
    @layer components {
        :global(.HTMLTooltip) {
            min-width: 175px;
            min-width: fit-content;
            max-width: 450px;
            padding: 8px 10px;
            color: var(--theme-text-light);
            line-height: var(--line-height-sm);
            font-size: var(--font-size-sm);
            font-weight: var(---font-weight-normal);
        }
        :global(.HTMLTooltip__message) {
            white-space: pre;
        }
    }
</style>
