import { SvelteComponent } from "svelte";
export type Role = "img" | "presentation" | "status";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Color = "light" | "disabled" | "primary" | "success" | "warning" | "error" | "info";
export type IconName = "arrow-left" | "arrow-right" | "asterisk" | "check" | "chevron-double-right" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "circle-check" | "circle-check-solid" | "circle-close-solid" | "circle-info" | "circle-info-solid" | "circle-question-solid" | "circle-warning" | "circle-warning-solid" | "close" | "currency" | "database" | "database-refresh" | "download" | "ellipsis" | "eye" | "file" | "menu-collapse" | "menu-expand" | "plus" | "print" | "profile-card" | "refresh" | "search" | "spinner" | "upload" | "zoom-in" | "zoom-out";
export declare const icons: Record<IconName, {
    box: string;
    svg: string;
}>;
declare const __propDef: {
    props: {
        name: IconName;
        size?: Size | undefined;
        role?: Role | undefined;
        dark?: boolean | undefined;
        color?: Color | undefined;
        class?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        name: IconName;
        size?: Size | undefined;
        role?: Role | undefined;
        dark?: boolean | undefined;
        color?: Color | undefined;
        class?: string | undefined;
        label?: string | undefined;
    }>);
    $$bindings: "";
}
export {};
