import type { Placement } from "@floating-ui/dom";
import type { Snippet } from "svelte";
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
declare const Dropdown: $$__sveltets_2_IsomorphicComponent<{
    open?: boolean | undefined;
    placement?: Placement | undefined;
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "open">;
type Dropdown = InstanceType<typeof Dropdown>;
export default Dropdown;
