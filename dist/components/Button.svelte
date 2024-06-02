<script lang="ts">import HTMLTooltip from "./utils/HTMLTooltip.svelte";
let {
  label,
  href,
  type = "button",
  size = "md",
  color = "light",
  class: className,
  disabled = false,
  children,
  onclick
} = $props();
</script>

{#if !disabled && href}
    <a {href} class={className} aria-label={label} data-color={color} data-size={size} {onclick}>
        {#if children}
            {@render children()}
        {:else}
            {label}
        {/if}
    </a>
{:else}
    <button
        {type}
        class={className}
        disabled={Boolean(disabled)}
        aria-label={label}
        data-color={color}
        data-size={size}
        {onclick}
    >
        {#if children}
            {@render children()}
        {:else}
            {label}
        {/if}
    </button>
{/if}
{#if typeof disabled === "string"}
    <HTMLTooltip type={type === "submit" ? "warning" : "info"} tooltip={disabled} />
{/if}

<style>
    @layer components {
        a,
        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: var(--spacing-sm);

            border-radius: var(--rounded-lg);

            font-weight: var(--font-weight-medium);
            font-size: 13px;
            line-height: 20px;
            white-space: nowrap;
        }
        a:focus,
        button:focus {
            outline: none;
        }
        a:disabled,
        button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        /** Sizes */
        [data-size="xs"] {
            box-sizing: border-box;
            height: 24px;
            padding: 6px 9px;
        }
        [data-size="xs"]:has(> svg:only-child) {
            padding-left: 6px;
            padding-right: 6px;
        }
        [data-size="sm"] {
            box-sizing: border-box;
            height: 30px;
            padding: 0.5rem 0.75rem;
        }
        [data-size="sm"]:has(> svg:only-child) {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        [data-size="md"] {
            box-sizing: border-box;
            height: 36px;
            padding: 0.5rem 1rem;
        }
        [data-size="md"]:has(> svg:only-child) {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }
        [data-size="lg"] {
            box-sizing: border-box;
            height: 38px; /* same height as an input */
            padding: 0.625rem 1.25rem;
        }
        [data-size="lg"]:has(> svg:only-child) {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        /** Colors */
        [data-color="primary"] {
            color: white;
            background-color: var(--theme-primary-fg);
        }
        [data-color="primary"]:hover {
            background-color: var(--theme-primary-hover);
        }
        [data-color="primary"]:focus {
            box-shadow:
                0 0 0 0 #fff,
                0 0 0 4px color-mix(in srgb, var(--theme-primary-fg), transparent 50%),
                0 0 #000;
        }
        [data-color="light"] {
            color: var(--theme-text-base);
            border: 1px solid var(--theme-border-dark);
            background-color: white;
        }
        [data-color="light"]:hover {
            color: var(--theme-text-base);
            background-color: var(--theme-button-hover);
        }
        [data-color="light"]:focus {
            color: var(--theme-primary-dark);
            box-shadow:
                0 0 0 0 #fff,
                0 0 0 4px var(--theme-border-dark),
                0 0 #000;
        }
        [data-color="transparent"] {
            color: var(--theme-text-base);
            border: none;
            background: none;
            opacity: 0.75;
        }
        [data-color="transparent"]:hover {
            background-color: rgba(50, 50, 50, 0.1);
        }
        [data-color="transparent"]:focus {
            outline: none;
            box-shadow:
                0 0 0 0 white,
                0 0 0 2px rgba(50, 50, 50, 0.15),
                0 0 #000;
        }
        [data-color="link"] {
            color: var(--theme-primary-fg);
            border: none;
            background: none;
            opacity: 0.75;
        }
        [data-color="link"]:hover {
            background-color: rgba(50, 50, 50, 0.1);
        }
        [data-color="link"]:focus {
            outline: none;
            box-shadow:
                0 0 0 0 white,
                0 0 0 2px rgba(50, 50, 50, 0.15),
                0 0 #000;
        }
    }
</style>
