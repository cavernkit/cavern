/// <reference types="svelte" />
import type { Toast as ToastData } from "../stores/toasts";
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const ToastContainer: $$__sveltets_2_IsomorphicComponent<{
    toasts: ToastData[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type ToastContainer = InstanceType<typeof ToastContainer>;
export default ToastContainer;
