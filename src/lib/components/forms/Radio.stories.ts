import type { Meta, StoryObj } from "@storybook/svelte";
import Radio from "./Radio.svelte";

const metadata = {
    component: Radio,
    title: "Radio",
    tags: ["autodocs"],
} satisfies Meta<Radio>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Checked: Story = {
    args: {
        group: "Option A",
        value: "Option A",
        disabled: false,
    },
};

export const CheckedDisabled: Story = {
    args: {
        group: "Option A",
        value: "Option A",
        disabled: true,
    },
};

export const Unchecked: Story = {
    args: {
        group: null,
        value: "Option A",
        disabled: false,
    },
};

export const UncheckedDisabled: Story = {
    args: {
        group: null,
        value: "Option A",
        disabled: true,
    },
};

export const DisabledTooltip: Story = {
    args: {
        value: "Option A",
        disabled: "This is a tooltip",
    },
};

export const Label: Story = {
    args: {
        label: "Radio",
        value: "Option A",
    },
};
