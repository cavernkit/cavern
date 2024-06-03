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
            name: "user",
            listDisplay: ["id", "email", "password", "profile_image_url", "last_login"],
            listFields: {
                id: { type: "uuid" },
                email: { type: "email" },
                password: { type: "password" },
                profile_image_url: { type: "uri" },
                not_displayed: { type: "string" },
                last_login: { type: "datetime" },
            },
            list: () => {
                return {
                    data: [
                        {
                            id: "da55cad0-dc25-4f03-ae25-ccd54a6a01db",
                            email: "bob@example.net",
                            password: "This should look like dots",
                            profile_image_url: "https://my.cdn/user/bob.png",
                            not_displayed: "This should not be visible",
                            last_login: new Date().toISOString(),
                        },
                        {
                            id: "e22fc019-1165-4281-87c3-cef46c2a5c88",
                            email: "amanda@example.net",
                            password: "This should look like dots",
                            profile_image_url: "https://my.cdn/user/amanda.png",
                            not_displayed: "This should not be visible",
                            last_login: null,
                        },
                    ],
                };
            },
        },
    },
};
