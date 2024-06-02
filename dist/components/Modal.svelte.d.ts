import { SvelteComponent } from "svelte";
export type Placement = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        title?: string | undefined;
        class?: string | undefined;
        placement?: Placement | undefined;
        dismissable?: boolean | undefined;
        ondismiss?: (() => void) | undefined;
        children: Snippet;
        header?: ((this: void) => typeof import("svelte").SnippetReturn & {
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
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        open?: boolean | undefined;
        title?: string | undefined;
        class?: string | undefined;
        placement?: Placement | undefined;
        dismissable?: boolean | undefined;
        ondismiss?: (() => void) | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        header?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        footer?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
