/// <reference types="svelte" />
export type Color = "dark" | "primary" | "error" | "warning" | "success" | "info";
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
declare const Badge: $$__sveltets_2_IsomorphicComponent<{
    color?: Color | undefined;
    border?: boolean | undefined;
    class?: string | undefined;
    children?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Badge = InstanceType<typeof Badge>;
export default Badge;
