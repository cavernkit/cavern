import type { Meta, StoryObj } from "@storybook/svelte";
import ToastContainer from "./ToastContainer.svelte";

const metadata = {
    component: ToastContainer,
    parameters: { layout: "fullscreen" },
} satisfies Meta<ToastContainer>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Toasts: Story = {
    args: {
        toasts: [
            {
                id: 1,
                type: "info" as const,
                title: "He said, she said.",
                duration: null,
                dismissable: true,
            },
            {
                id: 2,
                type: "success" as const,
                title: "Your record was saved.",
                duration: null,
                dismissable: true,
            },
            {
                id: 3,
                type: "warning" as const,
                title: "Hmm, seems sus.",
                duration: null,
                dismissable: true,
            },
            {
                id: 4,
                type: "error" as const,
                title: "Oh my gosh, it's on fire and everyone is gonna die!",
                duration: null,
                dismissable: true,
            },
            {
                id: 5,
                type: "error" as const,
                title: "Something went wrong",
                details: "Oh my gosh, it's on fire and everyone is gonna die! Run for your lives!",
                duration: null,
                dismissable: true,
            },
        ],
    },
};
