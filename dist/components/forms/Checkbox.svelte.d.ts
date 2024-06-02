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
declare const Checkbox: $$__sveltets_2_IsomorphicComponent<{
    id?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    group?: (string | number)[] | undefined;
    value?: string | number | undefined;
    checked?: boolean | undefined;
    indeterminate?: boolean | undefined;
    disabled?: string | boolean | undefined;
    required?: boolean | undefined;
    class?: string | undefined;
    children?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    onblur?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onfocus?: ((event: FocusEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onclick?: ((event: MouseEvent & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
    onchange?: ((event: Event & {
        currentTarget: HTMLInputElement;
    }) => unknown) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "group" | "checked" | "indeterminate">;
type Checkbox = InstanceType<typeof Checkbox>;
export default Checkbox;
