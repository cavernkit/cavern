<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

    type Color = "primary" | "warning" | "success" | "error" | "info";
    type Progress = {
        value: number;
        color?: Color;
        label?: string | null;
        tooltip?: string | null;
    };

    let {
        size = "md",
        total = 100.0,
        label,
        tooltip,
        progress = 0.0,
    }: {
        size?: "sm" | "md";
        total?: number;
        label?: string;
        tooltip?: string | false;
        progress?: Progress[] | Progress | number;
    } = $props();

    const array = $derived(
        Array.isArray(progress) ? progress : typeof progress === "number" ? [{ value: progress }] : [progress],
    );
    const sum = $derived(array.reduce((sum, x) => sum + Math.max(x.value, 0.0), 0.0));
    const max = $derived(Math.max(sum, total));
    const bars = $derived(createBars(array, max, sum));
    const hasLabels = $derived(label || bars.some((x) => x.label));

    const COLORS = {
        primary: "var(--theme-primary-fg)",
        warning: "var(--theme-warning-fg)",
        success: "var(--theme-success-fg)",
        error: "var(--theme-error-fg)",
        info: "var(--theme-info-fg)",
    } as const;

    function createBars(array: Progress[], max: number, sum: number) {
        let zIndex = array.length;
        const out = [];
        for (const input of array) {
            if (input.value <= 0 && (!input.label || sum > 0 || out.length > 0)) {
                continue;
            }

            const width = 100.0 * (input.value / max);
            const color = input.color || "primary";
            out.push({
                width,
                color,
                zIndex: zIndex--,
                label: input.label ?? null,
                tooltip: input.tooltip ?? null,
            });
        }
        return out;
    }

    // Hide bar labels that will overlap with the "Total" label
    const overlapPx = 20;
    let containerEl: HTMLDivElement | undefined;
    let resizeObserver: ResizeObserver | undefined;
    const hideOverlappingLabels = () => {
        if (containerEl && label) {
            const totalLabel = containerEl.querySelector<HTMLElement>(".label.total");
            if (totalLabel) {
                const totalRect = totalLabel.getBoundingClientRect();
                const labels = containerEl.querySelectorAll<HTMLElement>(".label:not(.total)");
                for (const label of labels) {
                    const labelRect = label.getBoundingClientRect();
                    if (labelRect.left > totalRect.left - overlapPx) {
                        label.style.visibility = "hidden";
                        label.style.removeProperty("maxWidth");
                    } else if (labelRect.right >= totalRect.left) {
                        label.style.visibility = "visible";
                        label.style.maxWidth = `${labelRect.width - (labelRect.right - labelRect.left)}px`;
                    } else {
                        label.style.visibility = "visible";
                        label.style.removeProperty("maxWidth");
                    }
                }
            }
        }
    };
    $effect(() => {
        if (containerEl && !resizeObserver) {
            resizeObserver = new ResizeObserver(hideOverlappingLabels);
            resizeObserver.observe(containerEl);
        }
        hideOverlappingLabels();
    });
</script>

<div
    bind:this={containerEl}
    class="Progress"
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={max}
    aria-valuenow={sum}
    data-size={size}
    style:margin-top={hasLabels ? "1.25rem" : null}
>
    {#each bars as bar}
        <span
            class="bar"
            style:background-color={COLORS[bar.color]}
            style:z-index={bar.zIndex}
            style:width="{bar.width}%"
        >
            {#if bar.label}
                <div class="label">{bar.label}</div>
                {#if tooltip !== false}
                    <Tooltip tooltip={bar.tooltip || bar.label} placement="top-start" />
                {/if}
            {:else if bar.tooltip}
                <div class="tooltip"></div>
                <Tooltip tooltip={bar.tooltip} placement="top" />
            {/if}
        </span>
    {/each}
    {#if label}
        <!-- Position: End of bar -->
        <div class="label total">{label}</div>
        {#if tooltip !== false}
            <Tooltip tooltip={tooltip || label} placement="top-end" />
        {/if}
    {:else if tooltip}
        <!-- Position: Centered of "remaining" background of bar -->
        <div class="tooltip total" style:width="{(100 * (max - sum)) / max}%"></div>
        <Tooltip {tooltip} placement="top" />
    {/if}
</div>

<style>
    @layer components {
        .Progress {
            position: relative;
            display: flex;
            gap: 0;
            width: 100%;
            border-radius: 9999px;
            background-color: var(--theme-gray-bg);
        }
        .Progress[data-size="sm"] {
            height: 0.375rem;
        }
        .Progress[data-size="md"] {
            height: 0.5rem;
        }

        .Progress .bar {
            position: relative;
            display: inline-block;
            height: 100%;
            border-radius: 9999px;
            box-sizing: content-box;
        }
        .Progress .bar:not(:first-of-type) {
            border-left: 2px solid white;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        .Progress .bar:not(:last-of-type) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .Progress .label {
            position: absolute;
            left: 0;
            top: -1.125rem;
            font-size: var(--font-size-xs);
            line-height: var(--line-height-xs);
            font-weight: var(--font-weight-medium);
            padding-bottom: var(--line-height-xs);

            width: 100%;
            min-width: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .Progress .label.total {
            left: initial;
            right: 0;
            width: auto;
            z-index: 4;
            text-align: right;
            font-weight: var(--font-weight-bold);
        }
        .Progress .tooltip {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .Progress .tooltip.total {
            left: initial;
            right: 0;
            width: auto;
            min-width: max(10%, 20px);
            z-index: 4;
        }

        /** Label: Allow the last label to trail past the end of the progress indicator */
        .Progress .bar:last-of-type .label {
            overflow: visible;
        }

        /** Label: Use `width:auto` to stop the last label from overlapping with the total */
        .Progress:has(.label.total) .bar + .bar:last-of-type .label {
            width: auto;
        }
    }
</style>
