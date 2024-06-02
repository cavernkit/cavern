import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
export type NavHeaderProps = typeof __propDef.props;
export type NavHeaderEvents = typeof __propDef.events;
export type NavHeaderSlots = typeof __propDef.slots;
export default class NavHeader extends SvelteComponent<NavHeaderProps, NavHeaderEvents, NavHeaderSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string | undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
