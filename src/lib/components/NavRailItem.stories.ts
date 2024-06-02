import type { Meta, StoryObj } from "@storybook/svelte";
import NavRailItem from "./NavRailItem.svelte";

const metadata = {
    component: NavRailItem,
    tags: ["autodocs"],
} satisfies Meta<NavRailItem>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Default: Story = {
    args: {
        label: "Section 1",
        icon: "database",
    },
};

export const Active: Story = {
    args: {
        label: "Section 1",
        icon: "database",
        href: window.location.pathname,
    },
};
