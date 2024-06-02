<script lang="ts">import Icon from "./icons/Icon.svelte";
import Step from "./stepper/Step.svelte";
let {
  steps,
  active
} = $props();
if (active === void 0) {
  active = steps[0].value;
}
</script>

<ol class="Stepper">
    {#each steps as step, index}
        {#if index > 0}
            <Icon name="chevron-double-right" size="xs" color="disabled" />
        {/if}
        <Step
            label={step.label}
            completed={step.completed}
            active={active === step.value}
            onclick={() => (active = step.value)}
        />
    {/each}
</ol>

<style>
    .Stepper {
        list-style: none;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: var(--spacing-md);
        gap: var(--spacing-md);

        border-radius: var(--rounded-lg);
        border: 1px solid var(--theme-border-dark);
    }
</style>
