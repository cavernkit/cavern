import type { Meta, StoryObj } from "@storybook/svelte";
import Badge from "./Badge.svelte";

const metadata = {
    component: Badge,
    tags: ["autodocs"],
} satisfies Meta<Badge>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Dark: Story = {};
export const Primary: Story = { args: { color: "primary" } };
export const Error: Story = { args: { color: "error" } };
export const Warning: Story = { args: { color: "warning" } };
export const Success: Story = { args: { color: "success" } };
export const Info: Story = { args: { color: "info" } };

export const BorderDark: Story = { args: { border: true } };
export const BorderPrimary: Story = { args: { border: true, color: "primary" } };
export const BorderError: Story = { args: { border: true, color: "error" } };
export const BorderWarning: Story = { args: { border: true, color: "warning" } };
export const BorderSucces: Story = { args: { border: true, color: "success" } };
export const BorderInfo: Story = { args: { border: true, color: "info" } };
