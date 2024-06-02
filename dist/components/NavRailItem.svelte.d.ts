/// <reference types="svelte" />
import type { IconName } from "./icons/Icon.svelte";
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
declare const NavRailItem: $$__sveltets_2_IsomorphicComponent<{
    label: string;
    icon: IconName;
    href?: string | undefined;
    disabled?: boolean | undefined;
    onclick?: ((event: MouseEvent) => unknown) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type NavRailItem = InstanceType<typeof NavRailItem>;
export default NavRailItem;
