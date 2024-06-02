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
declare const Input: $$__sveltets_2_IsomorphicComponent<({
    id?: string | undefined;
    name?: string | undefined;
    type?: "search" | "text" | "email" | "password" | "tel" | "url" | undefined;
    help?: string | undefined;
    label?: string | undefined;
    layout?: "vertical" | "overlap" | "inset" | undefined;
    align?: "left" | "right" | undefined;
    value?: string | null | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    class?: string | undefined;
    leading?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    trailing?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    onblur?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onfocus?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    oninput?: ((event: Event & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onchange?: ((event: Event & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
} & {
    min?: undefined;
    max?: undefined;
    step?: undefined;
} & {
    maxlength?: number | undefined;
    minlength?: number | undefined;
    pattern?: RegExp | undefined;
}) | ({
    id?: string | undefined;
    name?: string | undefined;
    type?: "number" | undefined;
    help?: string | undefined;
    label?: string | undefined;
    layout?: "vertical" | "overlap" | "inset" | undefined;
    align?: "left" | "right" | undefined;
    value?: number | null | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    class?: string | undefined;
    leading?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    trailing?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    onblur?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onfocus?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    oninput?: ((event: Event & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onchange?: ((event: Event & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
} & {
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
} & {
    maxlength?: undefined;
    minlength?: undefined;
    pattern?: undefined;
}), {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "value">;
type Input = InstanceType<typeof Input>;
export default Input;
