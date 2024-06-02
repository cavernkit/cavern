import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
    js.configs.recommended,
    ...typescriptEslint.configs.recommended,
    ...eslintPluginSvelte.configs["flat/recommended"],
    eslintConfigPrettier,
    {
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: { ...globals.node, ...globals.browser, ...globals.es2017 },
            parser: svelteParser,
            parserOptions: {
                parser: typescriptEslint.parser,
                extraFileExtensions: [".svelte"],
            },
        },
    },
    {
        ignores: [
            "pnpm-lock.yaml",
            "package-lock.json",
            "yarn.lock",
            "**/node_modules",
            "**/.yarn",
            "**/.svelte-kit",
            "**/storybook-static",
            "**/dist",
        ],
    },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": ["off"],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],
            "sort-imports": [
                "error",
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: true,
                    memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                    allowSeparatedGroups: true,
                },
            ],
        },
    },
);
