import type { Meta, StoryObj } from "@storybook/svelte";
import NavHeader from "./NavHeader.svelte";

const metadata = {
    component: NavHeader,
    parameters: { layout: "fullscreen" },
} satisfies Meta<NavHeader>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Empty: Story = {};
