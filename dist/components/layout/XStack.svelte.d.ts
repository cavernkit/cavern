import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        justify?: "left" | "center" | "right" | undefined;
        class?: string | undefined;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type XStackProps = typeof __propDef.props;
export type XStackEvents = typeof __propDef.events;
export type XStackSlots = typeof __propDef.slots;
export default class XStack extends SvelteComponent<XStackProps, XStackEvents, XStackSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        justify?: "left" | "center" | "right" | undefined;
        class?: string | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
