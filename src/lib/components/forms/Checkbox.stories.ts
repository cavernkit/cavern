import type { Meta, StoryObj } from "@storybook/svelte";
import Checkbox from "./Checkbox.svelte";

const metadata = {
    component: Checkbox,
    title: "Checkbox",
    tags: ["autodocs"],
} satisfies Meta<Checkbox>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Checked: Story = {
    args: {
        checked: true,
        disabled: false,
        indeterminate: false,
    },
};

export const CheckedDisabled: Story = {
    args: {
        checked: true,
        disabled: true,
    },
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
    },
};

export const IndeterminateDisabled: Story = {
    args: {
        indeterminate: true,
        disabled: true,
    },
};

export const Unchecked: Story = {
    args: {
        checked: false,
    },
};

export const UncheckedDisabled: Story = {
    args: {
        checked: false,
        disabled: true,
    },
};

export const DisabledTooltip: Story = {
    args: {
        disabled: "This is a tooltip",
    },
};

export const Label: Story = {
    args: {
        label: "Checkbox",
    },
};
