import type { Meta, StoryObj } from "@storybook/svelte";
import TabList from "./TabList.svelte";

const metadata = {
    component: TabList,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
} satisfies Meta<TabList>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Default: Story = {
    args: {
        tabs: [
            { value: "a", label: "Tab A" },
            { value: "b", label: "Tab B" },
            { value: "c", label: "Tab C" },
        ],
        activeTab: "a",
    },
};
