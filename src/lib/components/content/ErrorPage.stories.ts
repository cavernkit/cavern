import type { Meta, StoryObj } from "@storybook/svelte";
import ErrorPage from "./ErrorPage.svelte";

const metadata = {
    component: ErrorPage,
    title: "ErrorPage",
    tags: ["autodocs"],
    parameters: { layout: "padded" },
} satisfies Meta<ErrorPage>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Error404: Story = {
    args: {
        title: 'Page not found',
        status: 404,
        message: 'Sorry, we couldn’t find the page you’re looking for.',
    }
};

export const ErrorMinimal: Story = {
    args: {
        color: "error",
        title: 'Oh no! Bad stuff.',
    }
};