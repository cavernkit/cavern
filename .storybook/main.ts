import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
    docs: { autodocs: "tag" },
    stories: [
        "../docs/**/*.mdx",
        {
            directory: "../src/lib/components",
            titlePrefix: "Components",
        },
        {
            directory: "../src/lib/admin/components",
            titlePrefix: "Admin",
        },
    ],
    staticDirs: ["../static"],
    core: { disableWhatsNewNotifications: true },
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: { name: "@storybook/sveltekit", options: {} },
    async viteFinal(config) {
        const { mergeConfig } = await import("vite");
        return mergeConfig(config, {
            server: {
                fs: {
                    allow: ["./docs"],
                },
            },
        });
    },
};
export default config;
