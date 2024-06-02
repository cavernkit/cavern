import type { Meta, StoryObj } from "@storybook/svelte";
import Fieldset from "./Fieldset.svelte";

const metadata = {
    component: Fieldset,
    title: "Fieldset",
    tags: ["autodocs"],
} satisfies Meta<Fieldset>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Legend: Story = {
    args: {
        legend: "Pick a Flavor",
        required: false,
        description: "",
        options: ["Vanilla", "Chocolate"],
    },
};

export const Required: Story = {
    args: {
        legend: "Pick a Flavor",
        required: true,
        options: [
            { label: "Vanilla", value: 1 },
            { label: "Chocolate", value: 2 },
            { label: "Strawberry", value: 3 },
        ],
    },
};

export const Description: Story = {
    args: {
        legend: "Pick a Flavor",
        description: "You are stuck with this flavor forever. It better be your favorite.",
    },
};
