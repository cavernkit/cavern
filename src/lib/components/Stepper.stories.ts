import type { Meta, StoryObj } from "@storybook/svelte";
import Stepper from "./Stepper.svelte";

const metadata = {
    component: Stepper,
    tags: ["autodocs"],
} satisfies Meta<Stepper>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Steps: Story = {
    args: {
        active: "two",
        steps: [
            { label: "One", value: "one", completed: true },
            { label: "Two", value: "two", completed: false },
            { label: "Three", value: "three", completed: false },
        ],
    },
};
