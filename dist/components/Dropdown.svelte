<script lang="ts">import Popup from "./utils/Popup.svelte";
let {
  open = $bindable(false),
  placement = "bottom-end",
  children
} = $props();
</script>

<Popup class="Dropdown" role="menu" arrow={false} trigger="click" interactive {placement} bind:open>
    <ul>
        {@render children()}
    </ul>
</Popup>

<style>
    @layer components {
        :global(.Dropdown) {
            padding: 0 4px;
            border: none !important;
            border-radius: var(--rounded-md);

            /* a stronger box-shadow than the default popup */
            box-shadow:
                0 0 0 0 #0000,
                0 0 0 1px rgba(0, 0, 0, 0.05),
                0px 10px 15px -3px rgba(0, 0, 0, 0.1),
                0px 4px 6px -4px rgba(0, 0, 0, 0.1);
        }

        :global(.Dropdown > ul) {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }
    }
</style>
