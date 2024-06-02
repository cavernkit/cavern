import type { Meta, StoryObj } from "@storybook/svelte";
import Breadcrumb from "./Breadcrumb.svelte";

const metadata = {
    component: Breadcrumb,
    tags: ["autodocs"],
} satisfies Meta<Breadcrumb>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Links: Story = {
    args: {
        links: [
            { label: "My Module", href: "/module" },
            { label: "My Section", href: "/module/index" },
            { label: "My Record", href: "/module/index/record" },
        ],
    },
};
