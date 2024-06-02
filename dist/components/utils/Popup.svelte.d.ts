import { SvelteComponent } from "svelte";
import type { Placement } from "@floating-ui/dom";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        role?: "tooltip" | "menu" | "listbox" | undefined;
        arrow?: boolean | undefined;
        offset?: number | undefined;
        interactive?: boolean | undefined;
        placement?: Placement | undefined;
        strategy?: "absolute" | "fixed" | undefined;
        trigger?: "hover" | "click" | "focus" | undefined;
        class?: string | undefined;
        for?: string | undefined;
        onshow?: (() => void) | undefined;
        onhide?: (() => void) | undefined;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PopupProps = typeof __propDef.props;
export type PopupEvents = typeof __propDef.events;
export type PopupSlots = typeof __propDef.slots;
export default class Popup extends SvelteComponent<PopupProps, PopupEvents, PopupSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        open?: boolean | undefined;
        role?: "tooltip" | "menu" | "listbox" | undefined;
        arrow?: boolean | undefined;
        offset?: number | undefined;
        interactive?: boolean | undefined;
        placement?: Placement | undefined;
        strategy?: "absolute" | "fixed" | undefined;
        trigger?: "hover" | "click" | "focus" | undefined;
        class?: string | undefined;
        for?: string | undefined;
        onshow?: (() => void) | undefined;
        onhide?: (() => void) | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
