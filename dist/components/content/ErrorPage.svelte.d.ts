/// <reference types="svelte" />
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const ErrorPage: $$__sveltets_2_IsomorphicComponent<{
    title: string;
    status?: string | number | null | undefined;
    message?: string | null | undefined;
} & ({
    actions?: undefined;
    home?: string | {
        href: string;
        label: string;
    } | undefined;
} | {
    actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    home?: undefined;
}), {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type ErrorPage = InstanceType<typeof ErrorPage>;
export default ErrorPage;
