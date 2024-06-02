import type { Preview } from "@storybook/svelte";

import "./preflight.css";
import "./preview.css";
import "../src/lib/index.css";

const preview: Preview = {
    parameters: {
        layout: "centered",
        options: {
            storySort: {
                method: "alphabetical",
                order: ["Design System", ["Introduction", "Colors", "Typography", "Icons"], "Components", "*"],
            },
        },
    },
    // parameters: {
    //     controls: {
    //         matchers: {
    //             color: /(background|color)$/i,
    //             date: /Date$/i,
    //         },
    //     },
    // },
};

export default preview;
