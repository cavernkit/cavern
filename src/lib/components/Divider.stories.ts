import type { Meta, StoryObj } from "@storybook/svelte";
import Divider from "./Divider.svelte";

const metadata = {
    component: Divider,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
} satisfies Meta<Divider>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Default: Story = {};

export const Text: Story = {
    args: {
        text: "OR",
    },
};
export const Spacing: Story = {
    args: {
        text: "spacing = md",
        spacing: "md",
    },
};
