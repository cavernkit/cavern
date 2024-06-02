import type { Meta, StoryObj } from "@storybook/svelte";
import ListPage from "./ListPage.svelte";

const metadata = {
    component: ListPage,
    parameters: { layout: "padded" },
} satisfies Meta<ListPage>;

export default metadata;

type Story = StoryObj<typeof metadata>;

export const Page: Story = {
    args: {
        model: {
            name: 'user',
            listDisplay: ["id", "email", "password", "profile_image_url"],
            listFields: {
                id: { type: "uuid" },
                email: { type: "email" },
                password: { type: "password" },
                profile_image_url: { type: "uri" },
                not_displayed: { type: "string" },
            },
            list: () => {
                return {
                    data: [
                        {
                            id: "1234-5678-9001",
                            email: "bob@example.net",
                            password: "This should look like dots",
                            profile_image_url: "https://my.cdn/user/bob.png",
                            not_displayed: "This should not be visible",
                        },
                        {
                            id: "9876-5432-1009",
                            email: "amanda@example.net",
                            password: "This should look like dots",
                            profile_image_url: "https://my.cdn/user/amanda.png",
                            not_displayed: "This should not be visible",
                        },
                    ],
                };
            },
        },
    },
};
