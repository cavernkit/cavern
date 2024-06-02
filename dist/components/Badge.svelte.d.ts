import { SvelteComponent } from "svelte";
export type Color = "dark" | "primary" | "error" | "warning" | "success" | "info";
declare const __propDef: {
    props: {
        color?: Color | undefined;
        border?: boolean | undefined;
        class?: string | undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        color?: Color | undefined;
        border?: boolean | undefined;
        class?: string | undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
