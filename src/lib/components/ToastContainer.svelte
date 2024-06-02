<script lang="ts">
    import { fade } from "svelte/transition";
    import type { Toast as ToastData } from "../stores/toasts";
    import Toast from "./Toast.svelte";

    let { toasts }: { toasts: ToastData[] } = $props();

    const iconMap = {
        info: "circle-info-solid",
        success: "circle-check-solid",
        warning: "circle-warning-solid",
        error: "circle-close-solid",
    } as const;
</script>

<div class="ToastContainer">
    {#each toasts as toast (toast.id)}
        <div out:fade={{ duration: 250 }}>
            <Toast
                icon={iconMap[toast.type]}
                color={toast.type}
                title={toast.title}
                details={toast.details}
                dismissable={toast.dismissable}
            />
        </div>
    {/each}
</div>

<style>
    @layer components {
        .ToastContainer {
            z-index: var(--z-toast);
            position: fixed;
            bottom: 1.5rem;
            right: 2rem;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;
        }
        .ToastContainer :global([aria-label="Close"]) {
            color: inherit;
            opacity: 0.5;
        }
        .ToastContainer :global([aria-label="Close"]):hover {
            background: rgba(50, 50, 50, 0.15);
        }
    }
</style>
