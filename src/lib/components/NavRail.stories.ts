import type { Meta, StoryObj } from "@storybook/svelte";
import NavRail from "./NavRail.svelte";

const metadata = {
    component: NavRail,
    parameters: { layout: "fullscreen" },
} satisfies Meta<NavRail>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Empty: Story = {};
