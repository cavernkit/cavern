import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        active: boolean;
        completed: boolean;
        href?: string | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StepProps = typeof __propDef.props;
export type StepEvents = typeof __propDef.events;
export type StepSlots = typeof __propDef.slots;
export default class Step extends SvelteComponent<StepProps, StepEvents, StepSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        label: string;
        active: boolean;
        completed: boolean;
        href?: string | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    }>);
    $$bindings: "";
}
export {};
