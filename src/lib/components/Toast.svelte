<script lang="ts">
    import { fly } from "svelte/transition";
    import Spacer from "./layout/Spacer.svelte";
    import CloseButton from "./utils/CloseButton.svelte";
    import type { IconName } from "./icons/Icon.svelte";
    import Icon from "./icons/Icon.svelte";
    import type { Snippet } from "svelte";

    let {
        icon,
        color = "dark",
        title,
        details,
        dismissable = true,
        ondismiss,
        more,
    }: {
        icon?: IconName;
        color?: "dark" | "primary" | "info" | "success" | "warning" | "error";
        title: string;
        details?: string;
        dismissable?: boolean;
        ondismiss?: () => void;
        more?: Snippet;
    } = $props();

    let visible = $state(true);
    const dismiss = (event: MouseEvent) => {
        event.preventDefault();
        visible = false;
        ondismiss?.();
    };
</script>

{#if visible}
    <div class="Toast" aria-live="polite" data-color={color} transition:fly={{ x: 200 }}>
        <header>
            {#if icon}
                <Icon name={icon} />
            {/if}
            <div>{title}</div>
            <Spacer />
            {#if dismissable}
                <CloseButton label="Dismiss" onclick={dismiss} />
            {/if}
        </header>
        {#if details}
            <p>{details}</p>
        {/if}
        {#if more}
            {@render more()}
        {/if}
    </div>
{/if}

<style>
    @layer components {
        .Toast {
            position: relative;
            max-width: 350px;

            border-radius: var(--rounded-lg);
            box-shadow: var(--shadow-sm);
        }
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--spacing-sm);
            padding: 0.5rem 1rem;

            font-size: var(--font-size-sm);
            line-height: var(--line-height-sm);
            font-weight: var(--font-weight-normal);
            border-radius: var(--rounded-lg);
        }
        header:has(+ *) {
            font-weight: var(--font-weight-medium);
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        header :global(button:last-child) {
            margin-right: -0.5rem;
        }
        p {
            padding: 0.75rem 1rem;
            color: var(--theme-text-disabled);
            font-size: var(--font-size-sm);
            line-height: var(--line-height-sm);
            background-color: white;
            border-bottom-left-radius: var(--rounded-lg);
            border-bottom-right-radius: var(--rounded-lg);
        }

        /** Colors */
        .Toast[data-color="dark"] {
            color: var(--theme-text-base);
            background-color: var(--theme-gray-bg);
        }
        .Toast[data-color="primary"] header {
            color: var(--theme-primary-dark);
            background-color: var(--theme-primary-bg);
        }
        .Toast[data-color="info"] header {
            color: var(--theme-info-dark);
            background-color: var(--theme-info-bg);
        }
        .Toast[data-color="success"] header {
            color: var(--theme-success-dark);
            background-color: var(--theme-success-bg);
        }
        .Toast[data-color="warning"] header {
            color: var(--theme-warning-dark);
            background-color: var(--theme-warning-bg);
        }
        .Toast[data-color="error"] header {
            color: var(--theme-error-dark);
            background-color: var(--theme-error-bg);
        }
    }
</style>
