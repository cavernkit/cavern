<script lang="ts" generics="T extends string | boolean | number | null = string">import Radio from "./Radio.svelte";
let {
  legend,
  description,
  value = $bindable(),
  options,
  required = false,
  disabled = false,
  class: className,
  children
} = $props();
const radios = $derived(options?.map((x) => typeof x === "string" ? { label: x, value: x } : x));
</script>

<fieldset class={className ? `Fieldset ${className}` : "Fieldset"}>
    <legend>
        {legend}
        {#if required}
            <span class="Fieldset__required" title="Required">*</span>
        {/if}
    </legend>
    {#if description}
        <p>
            {#if typeof description === "function"}
                {@render description()}
            {:else}
                {description}
            {/if}
        </p>
    {/if}
    {#if children}
        <div class="Fieldset__children">
            {@render children()}
        </div>
    {:else if radios}
        <div class="Fieldset__children">
            {#each radios as option (option.value)}
                <Radio
                    label={option.label}
                    {required}
                    {disabled}
                    value={option.value ?? ""}
                    group={value}
                    onchange={(e) => {
                        if (e.currentTarget.checked) {
                            value = option.value;
                        }
                    }}
                />
            {/each}
        </div>
    {/if}
</fieldset>

<style>
    @layer components {
        .Fieldset > legend {
            position: relative;
            color: var(--theme-text-base);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-sm);
            line-height: 1.5rem;
        }
        .Fieldset > p {
            color: var(--theme-text-light);
            font-size: var(--font-size-sm);
            line-height: 1.5rem;
        }
        .Fieldset__children {
            display: flex;
            flex-direction: column;
            margin-top: var(--spacing-sm);
            gap: var(--spacing-xs);
        }
        .Fieldset__required {
            color: var(--theme-primary-fg);
            font-size: 1.15em; /* uses `em` relative to parent */
            line-height: inherit;
            margin-left: -1px;
        }
    }
</style>
