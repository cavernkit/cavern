<script lang="ts">
    import Icon from "../icons/Icon.svelte";
    import Button from "../Button.svelte";

    let {
        label = "Close",
        href,
        class: className,
        disabled = false,
        onclick,
    }: {
        label?: string;
        href?: string;
        type?: "button" | "submit";
        class?: string;
        disabled?: boolean;
        onclick?: (event: MouseEvent) => unknown;
    } = $props();
</script>

<Button size="sm" color="transparent" class={className} {label} {href} {disabled} {onclick}>
    <Icon name="close" />
</Button>
