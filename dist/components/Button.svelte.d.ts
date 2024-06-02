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
declare const Button: $$__sveltets_2_IsomorphicComponent<{
    label?: string | undefined;
    href?: string | undefined;
    type?: "button" | "submit" | undefined;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    color?: "light" | "primary" | "link" | "transparent" | undefined;
    class?: string | undefined;
    disabled?: string | boolean | undefined;
    children?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    onclick?: ((event: MouseEvent) => unknown) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Button = InstanceType<typeof Button>;
export default Button;
