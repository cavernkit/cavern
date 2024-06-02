import type { Snippet } from "svelte";
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
declare const Window: $$__sveltets_2_IsomorphicComponent<{
    title: string;
    width?: string | undefined;
    height?: string | undefined;
    placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
    scrollable?: boolean | undefined;
    onclose?: (() => void) | undefined;
    children: Snippet;
    actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    footer?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Window = InstanceType<typeof Window>;
export default Window;
