/// <reference types="svelte" />
import type { Placement } from "@floating-ui/dom";
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
declare const Tooltip: $$__sveltets_2_IsomorphicComponent<{
    tooltip: string;
    placement?: Placement | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Tooltip = InstanceType<typeof Tooltip>;
export default Tooltip;
