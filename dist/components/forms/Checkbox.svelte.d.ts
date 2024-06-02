import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
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
    }>);
    $$bindings: "";
}
export {};
