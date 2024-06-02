<script lang="ts">import HTMLTooltip from "../utils/HTMLTooltip.svelte";
let {
  id,
  name,
  label,
  group = $bindable(),
  value = "checked",
  checked = $bindable(false),
  indeterminate = $bindable(),
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

{#snippet checkbox()}
    <input
        {id}
        {name}
        type="checkbox"
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
        bind:checked
        bind:indeterminate
    />
{/snippet}

{#if children || label}
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class={className ? `Checkbox ${className}` : "Checkbox"}>
        {@render checkbox()}
        <div>
            {#if children}
                {@render children()}
            {:else if label}
                {label}
            {/if}
        </div>
    </label>
{:else}
    <div class={className ? `Checkbox ${className}` : "Checkbox"}>
        {@render checkbox()}
    </div>
{/if}
{#if typeof disabled === "string"}
    <HTMLTooltip type="info" tooltip={disabled} />
{/if}

<style>
    @layer components {
        .Checkbox {
            display: flex;
            align-items: center;
            height: 1.5rem;
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
            cursor: pointer;

            color: var(--theme-primary-fg);
            background-color: #fff;
            border: 1px solid var(--theme-border-dark);
            border-radius: 0.25rem;
        }
        input:checked,
        input:indeterminate {
            border-color: transparent;
            background-color: currentColor;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        input:checked {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
        }
        input:indeterminate {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='2' x='4' y='7' rx='1'/%3E%3C/svg%3E");
        }
        label > div {
            margin-left: 0.75rem;
            line-height: 1.5rem;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
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
        input:disabled {
            cursor: not-allowed;
        }
        .Checkbox:has(> :global(input):disabled:checked),
        .Checkbox:has(> :global(input):disabled:indeterminate) {
            color: var(--theme-text-light);
        }
        .Checkbox:has(> :global(input):disabled:not(:checked):not(:indeterminate)) {
            color: var(--theme-text-disabled);
        }
        input:disabled:checked,
        input:disabled:indeterminate {
            background-color: color-mix(in srgb, var(--theme-primary-fg), transparent 50%);
        }
    }
</style>
