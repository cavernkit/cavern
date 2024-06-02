import { SvelteComponent } from "svelte";
import type { IconName } from "./icons/Icon.svelte";
declare const __propDef: {
    props: {
        icon?: IconName | undefined;
        color?: "primary" | "success" | "warning" | "error" | "info" | "dark" | undefined;
        title: string;
        details?: string | undefined;
        dismissable?: boolean | undefined;
        ondismiss?: (() => void) | undefined;
        more?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponent<ToastProps, ToastEvents, ToastSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        icon?: IconName | undefined;
        color?: "primary" | "success" | "warning" | "error" | "info" | "dark" | undefined;
        title: string;
        details?: string | undefined;
        dismissable?: boolean | undefined;
        ondismiss?: (() => void) | undefined;
        more?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
