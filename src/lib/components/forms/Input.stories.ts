import type { Meta, StoryObj } from "@storybook/svelte";
import Input from "./Input.svelte";

const metadata = {
    component: Input,
    title: "Input",
    tags: ["autodocs"],
} satisfies Meta<Input>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const DefaultValue: Story = {
    args: {
        label: "",
        value: "Bobby Jones",
        required: false,
        disabled: false,
        placeholder: "",
    },
};

export const Placeholder: Story = {
    args: {
        placeholder: "What do you want to say?",
    },
};

export const Label: Story = {
    args: {
        label: "Input",
        placeholder: "An input with a label",
    },
};

export const LabelOverlap: Story = {
    args: {
        label: "Input",
        layout: "overlap",
        placeholder: "An input with a label",
    },
};

export const LabelInline: Story = {
    args: {
        label: "Input",
        layout: "inline",
        placeholder: "An input with a label",
    },
};

export const Required: Story = {
    args: {
        label: "Full Name",
        required: true,
        placeholder: "An input with a label",
    },
};

export const HelpText: Story = {
    args: {
        label: "Email",
        placeholder: "you@example.com",
        help: "We want your information, just because.",
    },
};

export const DisabledTooltip: Story = {
    args: {
        placeholder: "Placeholder",
        disabled: "You must fill out some other input first.",
    },
};

export const Number: Story = {
    args: {
        type: "number",
        placeholder: "Age",
        step: 1,
        min: 0,
        max: 150,
    },
};

export const TextAlignment: Story = {
    args: {
        type: "number",
        align: "right",
        placeholder: "Currency",
        step: 0.01,
        min: 0,
    },
};
