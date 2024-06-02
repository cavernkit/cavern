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
export type NavRailProps = typeof __propDef.props;
export type NavRailEvents = typeof __propDef.events;
export type NavRailSlots = typeof __propDef.slots;
export default class NavRail extends SvelteComponent<NavRailProps, NavRailEvents, NavRailSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string | undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
