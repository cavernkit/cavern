import { SvelteComponent } from "svelte";
import type { IconName } from "./icons/Icon.svelte";
declare const __propDef: {
    props: {
        label: string;
        icon: IconName;
        href?: string | undefined;
        disabled?: boolean | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavRailItemProps = typeof __propDef.props;
export type NavRailItemEvents = typeof __propDef.events;
export type NavRailItemSlots = typeof __propDef.slots;
export default class NavRailItem extends SvelteComponent<NavRailItemProps, NavRailItemEvents, NavRailItemSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        label: string;
        icon: IconName;
        href?: string | undefined;
        disabled?: boolean | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    }>);
    $$bindings: "";
}
export {};
