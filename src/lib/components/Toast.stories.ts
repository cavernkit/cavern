import type { Meta, StoryObj } from "@storybook/svelte";
import Toast from "./Toast.svelte";

const metadata = {
    component: Toast,
    tags: ["autodocs"],
} satisfies Meta<Toast>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Title: Story = {
    args: {
        title: "He said, she said.",
        dismissable: true,
    },
};

export const Details: Story = {
    args: {
        title: "He said, she said",
        details: "And after all, who can say how it really went?",
        dismissable: true,
    },
};

export const Info: Story = {
    args: {
        color: "info",
        title: "He said, she said.",
        dismissable: true,
    },
};
export const InfoDetails: Story = {
    args: {
        color: "info",
        title: "He said, she said",
        details: "And after all, who can say how it really went?",
        dismissable: true,
    },
};

export const Success: Story = {
    args: {
        color: "success",
        title: "Your record was saved.",
        dismissable: true,
    },
};
export const SuccessDetails: Story = {
    args: {
        color: "success",
        title: "Your record was saved",
        details: "Feel comforted that the data is safe.",
        dismissable: true,
    },
};

export const Warning: Story = {
    args: {
        color: "warning",
        title: "Hmm, seems sus.",
        dismissable: true,
    },
};

export const WarningDetails: Story = {
    args: {
        color: "warning",
        title: "Hmm, seems sus",
        details: "Are you sure you pressed all the buttons?",
        dismissable: true,
    },
};

export const Error: Story = {
    args: {
        color: "error",
        title: "It's on fire and everyone is gonna die!",
        dismissable: true,
    },
};

export const ErrorDetails: Story = {
    args: {
        color: "error",
        title: "Something went wrong",
        details: "Oh my gosh, it's on fire and everyone is gonna die! Run for your lives!",
        dismissable: true,
    },
};
