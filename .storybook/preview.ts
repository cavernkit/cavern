import type { Preview } from "@storybook/svelte";

import "./preflight.css";
import "./preview.css";
import "../src/lib/index.css";

const preview: Preview = {
    parameters: {
        layout: "centered",
        options: {
            // prettier-ignore
            storySort: {
                method: "alphabetical",
                order: [
                    "Design System", ["Introduction", "Colors", "Typography", "Icons"],
                    "Components",
                    "Admin",
                    "*",
                ],
            },
        },
    },
};

export default preview;
