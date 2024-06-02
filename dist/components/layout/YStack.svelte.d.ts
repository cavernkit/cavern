import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        class?: string | undefined;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type YStackProps = typeof __propDef.props;
export type YStackEvents = typeof __propDef.events;
export type YStackSlots = typeof __propDef.slots;
export default class YStack extends SvelteComponent<YStackProps, YStackEvents, YStackSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        class?: string | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
