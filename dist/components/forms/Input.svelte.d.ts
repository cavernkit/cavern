import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: ({
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
    });
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<({
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
    })>);
    $$bindings: "";
}
export {};
