import { SvelteComponent } from "svelte";
import type { Placement } from "@floating-ui/dom";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        placement?: Placement | undefined;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
export default class Dropdown extends SvelteComponent<DropdownProps, DropdownEvents, DropdownSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        open?: boolean | undefined;
        placement?: Placement | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
