import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        width?: string | undefined;
        height?: string | undefined;
        placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        scrollable?: boolean | undefined;
        onclose?: (() => void) | undefined;
        children: Snippet;
        actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        footer?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WindowProps = typeof __propDef.props;
export type WindowEvents = typeof __propDef.events;
export type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponent<WindowProps, WindowEvents, WindowSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        title: string;
        width?: string | undefined;
        height?: string | undefined;
        placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        scrollable?: boolean | undefined;
        onclose?: (() => void) | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        footer?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
