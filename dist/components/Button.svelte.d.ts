import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
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
    }>);
    $$bindings: "";
}
export {};
