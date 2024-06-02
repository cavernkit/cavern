import { SvelteComponent } from "svelte";
import type { Color, Role, Size } from "./Icon.svelte";
declare const __propDef: {
    props: {
        role?: Role | undefined;
        size?: Size | undefined;
        color?: Color | undefined;
        class?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SpinnerProps = typeof __propDef.props;
export type SpinnerEvents = typeof __propDef.events;
export type SpinnerSlots = typeof __propDef.slots;
export default class Spinner extends SvelteComponent<SpinnerProps, SpinnerEvents, SpinnerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        role?: Role | undefined;
        size?: Size | undefined;
        color?: Color | undefined;
        class?: string | undefined;
        label?: string | undefined;
    }>);
    $$bindings: "";
}
export {};
