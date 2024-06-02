<script lang="ts">import HTMLTooltip from "../utils/HTMLTooltip.svelte";
let {
  id,
  name,
  label,
  group = $bindable(),
  value,
  disabled = false,
  required = false,
  class: className,
  children,
  onblur,
  onfocus,
  onclick,
  onchange
} = $props();
let dirty = $state(false);
</script>

{#snippet radio()}
    <input
        {id}
        {name}
        type="radio"
        disabled={Boolean(disabled)}
        {required}
        {value}
        {onblur}
        {onfocus}
        {onclick}
        onchange={(event) => {
            dirty = true;
            onchange?.(event);
        }}
        data-dirty={dirty ? true : undefined}
        bind:group
    />
{/snippet}

{#if children || label}
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class={className ? `Radio ${className}` : "Radio"}>
        {@render radio()}
        <div>
            {#if children}
                {@render children()}
            {:else if label}
                {label}
            {/if}
        </div>
    </label>
{:else}
    <div class={className ? `Radio ${className}` : "Radio"}>
        {@render radio()}
    </div>
{/if}
{#if typeof disabled === "string"}
    <HTMLTooltip type="info" tooltip={disabled} />
{/if}

<style>
    @layer components {
        .Radio {
            display: flex;
            align-items: center;
            height: 1.5rem;
            line-height: var(--line-height-sm);
            font-size: var(--font-size-sm);
            cursor: pointer;
        }
        input {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin: 0;
            padding: 0;
            appearance: none;
            print-color-adjust: exact;
            vertical-align: middle;
            background-origin: border-box;
            user-select: none;
            flex-shrink: 0;

            color: var(--theme-primary-fg);
            background-color: #fff;
            border: 1px solid var(--theme-border-dark);
            border-radius: 100%;

            cursor: pointer;
        }
        input:checked {
            border-color: transparent;
            background-color: currentColor;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
        }
        label > div {
            margin-left: 0.75rem;
            line-height: 1.5rem;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            cursor: default;
        }

        /** Focus */
        input:focus,
        input:focus-visible {
            outline: 2px solid transparent;
            outline-offset: 2;
            box-shadow:
                0 0 0 2px #fff,
                0 0 0 4px var(--theme-primary-fg),
                0 0 #000;
        }

        /** Disabled */
        input:disabled,
        label:has(input:disabled) {
            cursor: not-allowed;
        }
        label:has(input:disabled:checked) {
            color: var(--theme-text-light);
        }
        label:has(input:disabled:not(:checked)) {
            color: var(--theme-text-disabled);
        }
        input:disabled:checked {
            background-color: color-mix(in srgb, var(--theme-primary-fg), transparent 50%);
        }
    }
</style>
