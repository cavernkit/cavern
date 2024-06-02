import type { Meta, StoryObj } from "@storybook/svelte";
import Icon from "./Icon.svelte";

const metadata = {
    component: Icon,
    title: "Icon",
    tags: ["autodocs"],
} satisfies Meta<Icon>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Color: Story = {
    args: {
        name: "circle-close-solid",
        color: "error",
    },
};

export const Size: Story = {
    args: {
        name: "chevron-double-right",
        size: "lg",
    },
};
