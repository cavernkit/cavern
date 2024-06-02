<script lang="ts">
    import type { Snippet } from "svelte";
    import HtmlTooltip from "../utils/HTMLTooltip.svelte";

    type Input<T, V> = {
        id?: string;
        name?: string;
        type?: T;
        help?: string;
        label?: string;
        layout?: "vertical" | "overlap" | "inset";
        align?: "left" | "right";
        value?: V | null;
        placeholder?: string;
        required?: boolean;
        disabled?: boolean;
        class?: string;
        leading?: Snippet;
        trailing?: Snippet;
        onblur?: (event: FocusEvent & { currentTarget: HTMLInputElement }) => unknown;
        onfocus?: (event: FocusEvent & { currentTarget: HTMLInputElement }) => unknown;
        oninput?: (event: Event & { currentTarget: HTMLInputElement }) => unknown;
        onchange?: (event: Event & { currentTarget: HTMLInputElement }) => unknown;
    };

    type Range<T> = { min?: T; max?: T; step?: T };
    type Requirements<T> = T extends true
        ? { maxlength?: number; minlength?: number; pattern?: RegExp }
        : { maxlength?: never; minlength?: never; pattern?: never };

    type InputText = Input<"text" | "search" | "email" | "password" | "tel" | "url", string> &
        Range<never> &
        Requirements<true>;
    type InputNumber = Input<"number", number> & Range<number> & Requirements<false>;
    type Props = InputText | InputNumber;

    let {
        id,
        name,
        type = "text",
        help,
        label,
        layout = "vertical",
        align,
        value,
        placeholder,
        required,
        disabled,
        minlength,
        maxlength,
        pattern,
        step,
        min,
        max,
        class: className,
        leading,
        trailing,
        onblur,
        onfocus,
        oninput,
        onchange,
    }: Props = $props();
    let dirty = $state(false);
</script>

{#snippet input()}
    <div class="Input__container">
        <div class="Input__layout">
            {#if leading}
                <div class="Input__leading">
                    {@render leading()}
                </div>
            {/if}
            <input
                {id}
                {name}
                {type}
                {placeholder}
                {required}
                {disabled}
                {minlength}
                {maxlength}
                pattern={pattern?.source}
                {step}
                {min}
                {max}
                {onblur}
                {onfocus}
                {oninput}
                onchange={(event) => {
                    dirty = true;
                    onchange?.(event);
                }}
                data-dirty={dirty ? true : undefined}
                data-align={align === "right" ? "right" : undefined}
                bind:value
            />
            {#if trailing}
                <div class="Input__trailing">
                    {@render trailing()}
                </div>
            {/if}
        </div>
    </div>
{/snippet}

{#if label}
    <label for={id} class={className ? `Input ${className}` : "Input"}>
        <div class="Input__label" data-placement={layout}>
            {label}
            {#if required}
                <span class="Input__required" title="Required">*</span>
            {/if}
        </div>
        {@render input()}
    </label>
{:else}
    <div class={className ? `Input ${className}` : "Input"}>
        {@render input()}
    </div>
{/if}
{#if typeof disabled === "string"}
    <HtmlTooltip type="warning" tooltip={disabled} />
{/if}
{#if help}
    <p class="Input__help">
        {help}
    </p>
{/if}

<style>
    @layer components {
        .Input {
            display: block;
        }
        .Input__container {
            position: relative;
            border-radius: var(--rounded-md);
            box-shadow: var(--shadow-sm);
        }
        .Input__layout {
            display: flex;
            position: relative;
            background-color: #fff;
            border: none;
            border-radius: var(--rounded-md);
            outline: 1px solid transparent;
            outline-offset: 2;
            box-shadow:
                0 0 0 0 #fff,
                0 0 0 1px var(--theme-border-dark),
                0 0 #000;
        }
        input {
            display: block;
            width: 100%;
            border: none;
            border-radius: var(--rounded-md);
            padding: 0.375rem 0.75rem;
            flex-grow: 1;

            color: var(--theme-text-base);
            background-color: inherit;
            border: none;
            outline: none;
            box-shadow: none;
        }
        input:placeholder {
            color: var(--theme-text-disabled);
        }

        /** Labels */
        .Input__label {
            position: relative;
            color: var(--theme-text-base);
            font-weight: var(--font-weight-medium);
            font-size: var(--font-size-sm);
            line-height: 1.5rem;
        }
        .Input__required {
            color: var(--theme-primary-fg);
            font-size: 1.15em; /* uses `em` relative to parent */
            line-height: inherit;
            margin-left: -1px;
        }
        .Input__help {
            color: var(--theme-text-light);
            font-size: var(--font-size-sm);
            line-height: 1.25rem;
            margin: 0;
            margin-top: var(--spacing-sm);
        }
        .Input__label[data-placement="vertical"] + :global(.Input__container) {
            margin-top: var(--spacing-sm);
        }
        .Input__label[data-placement="overlap"] {
            position: absolute;
            top: 1px;
            left: 1.125rem;
            z-index: 1;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            background: white;
            font-size: var(--font-size-xs);
            line-height: 1rem;
        }
        .Input__label[data-placement="inline"] {
            position: absolute;
            top: 1.125rem;
            left: 1.375rem;
            z-index: 1;
            font-size: var(--font-size-xs);
            line-height: 1rem;
        }
        .Input__label[data-placement="inline"] + :global(.Input__container > .Input__layout > input) {
            padding-top: 1.5rem;
        }

        /** Focus */
        .Input__layout:has(input:focus) {
            outline: 2px solid transparent;
            outline-offset: 2;
            box-shadow:
                0 0 0 0px #fff,
                0 0 0 2px var(--theme-primary-fg),
                0 0 #000;
            border-color: var(--theme-primary-fg);
        }

        /** Disabled */
        input:disabled::placeholder {
            color: color-mix(in srgb, var(--theme-text-disabled) 66%, transparent);
        }
        .Input__layout:has(input:disabled) {
            cursor: not-allowed;
            box-shadow:
                0 0 0 0 #fff,
                0 0 0 1px color-mix(in srgb, var(--theme-border-dark) 50%, transparent),
                0 0 #000;
            border-color: color-mix(in srgb, var(--theme-border-dark) 50%, transparent);
        }
        .Input__container:has(input:disabled) {
            /* copied from var(--shadow-sm), but with 50% opacity */
            box-shadow:
                0 1px 3px 0 rgb(0 0 0 / 0.05),
                0 1px 2px -1px rgb(0 0 0 / 0.05);
        }

        /** Trailing and Leading */
        .Input__leading {
            position: relative;
            top: 0px;
            left: 0px;
            bottom: 0px;

            display: flex;
            align-items: center;
        }
        .Input__leading:not(:has(a)):not(:has(button)):not(:has(input)):not(:has(select)) {
            pointer-events: none;
            padding-left: 0.75rem;
            color: var(--theme-text-light);
        }
        .Input__leading + input {
            padding-left: 0.4375rem;
        }
        .Input__trailing {
            position: relative;
            top: 0px;
            right: 0px;
            bottom: 0px;

            display: flex;
            align-items: center;
        }
        .Input__trailing:not(:has(a)):not(:has(button)):not(:has(input)):not(:has(select)) {
            pointer-events: none;
            padding-right: 0.75rem;
            color: var(--theme-text-light);
        }
        input:has(+ .Input__trailing) {
            padding-right: 0.4375rem;
        }

        /** Text Alignment */
        input[data-align="right"] {
            text-align: right;
        }
        input[data-align="right"][type="number"] {
            position: relative;
        }
        input[data-align="right"]::-webkit-outer-spin-button,
        input[data-align="right"]::-webkit-inner-spin-button {
            position: absolute;
            top: 0.5rem;
            bottom: 0.5rem;
            left: 0.625rem;
            right: auto;
            margin: auto;
        }

        /* TODO: Tailwind compatible and configurable media queries */
        @media (min-width: 640px) {
            input,
            .Input__leading,
            .Input__trailing {
                font-size: var(--font-size-sm);
                line-height: 1.5rem;
            }
        }
    }
</style>
