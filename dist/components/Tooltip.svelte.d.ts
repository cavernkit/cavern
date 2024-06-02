import { SvelteComponent } from "svelte";
import type { Placement } from "@floating-ui/dom";
declare const __propDef: {
    props: {
        tooltip: string;
        placement?: Placement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponent<TooltipProps, TooltipEvents, TooltipSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        tooltip: string;
        placement?: Placement | undefined;
    }>);
    $$bindings: "";
}
export {};
