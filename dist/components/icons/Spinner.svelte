<script lang="ts">import Icon from "./Icon.svelte";
let {
  role = "status",
  size = "md",
  color,
  class: className,
  label
} = $props();
</script>

<Icon name="spinner" class={className ? `Spinner ${className}` : "uipinner"} {role} {size} {color} {label} />

<style>
    @layer base {
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
    @layer components {
        :global(.Icon.Spinner) {
            display: inline;
            margin-top: -1px;
            animation: spin 1s linear infinite;
            fill: var(--theme-gray-bg);
        }
    }
</style>
