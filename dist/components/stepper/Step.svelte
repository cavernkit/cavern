<script lang="ts">import Icon from "../icons/Icon.svelte";
import XStack from "../layout/XStack.svelte";
import Clickable from "../utils/Clickable.svelte";
let {
  label,
  active,
  completed,
  href,
  onclick
} = $props();
const color = $derived(active ? "primary" : completed ? "success" : "disabled");
</script>

<li class="Step" aria-label="Step: {label}" aria-current={active ? "step" : null}>
    <Clickable {label} {href} {onclick}>
        <XStack spacing="sm">
            <div class="icon">
                {#if completed}
                    <Icon name="circle-check-solid" {color} dark={completed && !active} />
                {:else}
                    <Icon name="circle-check" {color} />
                {/if}
            </div>
            <h3 class="label">{label}</h3>
        </XStack>
    </Clickable>
</li>

<style>
    @layer components {
        .Step {
            position: relative;
            width: 100%;
            cursor: pointer;
            user-select: none;
        }

        .Step .icon {
            width: 1.5rem;
            height: 1.5rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .Step .label {
            display: inline;
            font-weight: var(--font-weight-medium);
        }
    }
</style>
