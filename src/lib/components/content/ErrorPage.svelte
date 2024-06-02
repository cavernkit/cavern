<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "../Button.svelte";
    import Icon from "../icons/Icon.svelte";

    type Actions =
        | { actions?: never; home?: string | { href: string; label: string } }
        | { actions?: Snippet; home?: never };

    let {
        title,
        status,
        message,
        home = "/",
        actions,
    }: {
        title: string;
        status?: number | string | null;
        message?: string | null;
    } & Actions = $props();
</script>

<main class="ErrorPage">
    <div class="ErrorPage__box">
        <p class="ErrorPage__status">{status}</p>
        <h1 class="ErrorPage__title">
            {title}
        </h1>
        {#if message}
            <p class="ErrorPage__message">
                {message}
            </p>
        {/if}
        <div class="ErrorPage__actions">
            {#if actions}
                {@render actions()}
            {:else if typeof home === "string"}
                <Button color="link" href={home} label="Go back home">
                    <Icon name="arrow-left" size="xs" /> Go back home
                </Button>
            {:else}
                <Button color="link" href={home.href} label={home.label}>
                    <Icon name="arrow-left" size="xs" /> {home.label}
                </Button>
            {/if}
        </div>
    </div>
</main>

<style>
    @layer components {
        .ErrorPage {
            display: grid;
            place-items: center;
            min-height: 100%;
            padding: 6rem 1.5rem;
        }

        .ErrorPage__box {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .ErrorPage__status {
            color: var(--theme-primary-fg);
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-semibold);
            margin-bottom: 0.25rem;
        }

        .ErrorPage__title {
            font-size: var(--font-size-3xl);
            font-weight: var(--font-weight-bold);
            line-height: 1;
        }

        .ErrorPage__message {
            margin-top: 1rem;
            color: var(--theme-text-light);
            font-size: var(--font-size-lg);
        }

        .ErrorPage__actions {
            display: flex;
            justify-content: center;
        }
        .ErrorPage__title + .ErrorPage__actions {
            margin-top: 2.25rem;
        }
        .ErrorPage__message + .ErrorPage__actions {
            margin-top: 0.5rem;
        }

        @media (min-width: 640px) {
            .ErrorPage {
                padding: 8rem 2rem;
            }
            .ErrorPage__title {
                font-size: var(--font-size-4xl);
            }
            .ErrorPage__message {
                margin-top: 1.5rem;
            }
            .ErrorPage__message + .ErrorPage__actions {
                margin-top: 1rem;
            }
        }
    }
</style>
