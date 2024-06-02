import type { Meta, StoryObj } from "@storybook/svelte";
import Button from "./Button.svelte";

const metadata = {
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<Button>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Primary: Story = {
    args: {
        label: "Button",
        color: "primary",
    },
};

export const Primary_Disabled: Story = {
    args: {
        label: "Button",
        color: "primary",
        disabled: true,
    },
};

export const Default: Story = {
    args: {
        label: "Button",
        color: "light",
    },
};

export const Disabled: Story = {
    args: {
        label: "Button",
        disabled: "A disabled message",
    },
};

export const Transparent: Story = {
    args: {
        color: "transparent",
        label: "Button",
    },
};
