import type { Meta, StoryObj } from "@storybook/svelte";
import Progress from "./Progress.svelte";

const metadata = {
    component: Progress,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
} satisfies Meta<Progress>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Simple: Story = {
    args: {
        progress: 35.0,
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        progress: 35.0,
    },
};

export const Total: Story = {
    args: {
        progress: 1,
        total: 2,
    },
};

export const Overflow: Story = {
    args: {
        progress: 150,
        total: 100,
    },
};

export const Color: Story = {
    args: {
        progress: { value: 35.0, color: "success" },
    },
};

export const Multiple: Story = {
    args: {
        progress: [
            { value: 35.0, color: "success" },
            { value: 35.0, color: "warning" },
        ],
    },
};

export const MultipleOverflow: Story = {
    args: {
        total: 50,
        progress: [
            { value: 40, color: "success" },
            { value: 20, color: "warning" },
            { value: 20, color: "error" },
        ],
    },
};

export const Tooltips: Story = {
    args: {
        tooltip: "Total 5000",
        progress: [
            { value: 10.0, color: "success", tooltip: "Success 500" },
            { value: 5.0, color: "error", tooltip: "Error 250" },
            { value: 15.0, color: "info", tooltip: "Info 750" },
            { value: 0.0, color: "warning", label: "Warning 0" },
        ],
    },
};

export const Labels: Story = {
    args: {
        label: "Total 5000",
        total: 5000_00,
        progress: [
            { value: 500_00, color: "success", label: "Success 500" },
            { value: 1250_00, color: "error", label: "Error 1250" },
            { value: 750_00, color: "info", label: "Info 750" },
            // should be hidden since value is 0
            { value: 0, color: "warning", label: "Warning 0" },
        ],
    },
};
export const LabelsOverlapping: Story = {
    args: {
        label: "Total Overlapping",
        progress: [
            { value: 2.0, color: "success", label: "First Bar" },
            { value: 2.0, color: "error", label: "Second Bar" },
            { value: 96.0, color: "warning", label: "Third Bar" },
            { value: 2.0, color: "info", label: "Fourth Bar" },
        ],
    },
};

export const Empty: Story = {
    args: {},
};
