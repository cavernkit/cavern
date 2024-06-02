import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        steps: {
            label: string;
            value: string | number;
            completed: boolean;
        }[];
        active?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StepperProps = typeof __propDef.props;
export type StepperEvents = typeof __propDef.events;
export type StepperSlots = typeof __propDef.slots;
export default class Stepper extends SvelteComponent<StepperProps, StepperEvents, StepperSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        steps: {
            label: string;
            value: string | number;
            completed: boolean;
        }[];
        active?: string | number | undefined;
    }>);
    $$bindings: "";
}
export {};
