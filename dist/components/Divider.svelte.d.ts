import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        text?: string | undefined;
        spacing?: "none" | "sm" | "md" | "lg" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponent<DividerProps, DividerEvents, DividerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        text?: string | undefined;
        spacing?: "none" | "sm" | "md" | "lg" | undefined;
    }>);
    $$bindings: "";
}
export {};
