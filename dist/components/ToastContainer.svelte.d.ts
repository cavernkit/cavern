import { SvelteComponent } from "svelte";
import type { Toast as ToastData } from "../stores/toasts";
declare const __propDef: {
    props: {
        toasts: ToastData[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastContainerProps = typeof __propDef.props;
export type ToastContainerEvents = typeof __propDef.events;
export type ToastContainerSlots = typeof __propDef.slots;
export default class ToastContainer extends SvelteComponent<ToastContainerProps, ToastContainerEvents, ToastContainerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        toasts: ToastData[];
    }>);
    $$bindings: "";
}
export {};
