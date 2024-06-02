/// <reference types="svelte" />
import type { Color, Role, Size } from "./Icon.svelte";
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
declare const Spinner: $$__sveltets_2_IsomorphicComponent<{
    role?: Role | undefined;
    size?: Size | undefined;
    color?: Color | undefined;
    class?: string | undefined;
    label?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Spinner = InstanceType<typeof Spinner>;
export default Spinner;
