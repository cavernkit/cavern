import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        name?: string | undefined;
        label?: string | undefined;
        group?: string | number | boolean | null | undefined;
        value: string | number | boolean | null;
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
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponent<RadioProps, RadioEvents, RadioSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        id?: string | undefined;
        name?: string | undefined;
        label?: string | undefined;
        group?: string | number | boolean | null | undefined;
        value: string | number | boolean | null;
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
