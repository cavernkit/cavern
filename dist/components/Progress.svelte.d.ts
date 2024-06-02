import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "sm" | "md" | undefined;
        total?: number | undefined;
        label?: string | undefined;
        tooltip?: string | false | undefined;
        progress?: number | {
            value: number;
            color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
            label?: string | null | undefined;
            tooltip?: string | null | undefined;
        } | {
            value: number;
            color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
            label?: string | null | undefined;
            tooltip?: string | null | undefined;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponent<ProgressProps, ProgressEvents, ProgressSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        size?: "sm" | "md" | undefined;
        total?: number | undefined;
        label?: string | undefined;
        tooltip?: string | false | undefined;
        progress?: number | {
            value: number;
            color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
            label?: string | null | undefined;
            tooltip?: string | null | undefined;
        } | {
            value: number;
            color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
            label?: string | null | undefined;
            tooltip?: string | null | undefined;
        }[] | undefined;
    }>);
    $$bindings: "";
}
export {};
