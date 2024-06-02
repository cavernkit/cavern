import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        type: "warning" | "info";
        tooltip: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HtmlTooltipProps = typeof __propDef.props;
export type HtmlTooltipEvents = typeof __propDef.events;
export type HtmlTooltipSlots = typeof __propDef.slots;
export default class HtmlTooltip extends SvelteComponent<HtmlTooltipProps, HtmlTooltipEvents, HtmlTooltipSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        type: "warning" | "info";
        tooltip: string;
    }>);
    $$bindings: "";
}
export {};
