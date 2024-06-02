import type { Meta, StoryObj } from "@storybook/svelte";
import Spinner from "./Spinner.svelte";

const metadata = {
    component: Spinner,
    title: "Spinner",
    tags: ["autodocs"],
} satisfies Meta<Spinner>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Loading: Story = {
    args: {
        color: "info",
        size: "lg",
    },
};
