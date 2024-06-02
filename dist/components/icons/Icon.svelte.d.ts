/// <reference types="svelte" />
export type Role = "img" | "presentation" | "status";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Color = "light" | "disabled" | "primary" | "success" | "warning" | "error" | "info";
export type IconName = "arrow-left" | "arrow-right" | "asterisk" | "check" | "chevron-double-right" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "circle-check" | "circle-check-solid" | "circle-close-solid" | "circle-info" | "circle-info-solid" | "circle-question-solid" | "circle-warning" | "circle-warning-solid" | "close" | "currency" | "database" | "database-refresh" | "download" | "ellipsis" | "eye" | "file" | "menu-collapse" | "menu-expand" | "plus" | "print" | "profile-card" | "refresh" | "search" | "spinner" | "upload" | "zoom-in" | "zoom-out";
export declare const icons: Record<IconName, {
    box: string;
    svg: string;
}>;
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
declare const Icon: $$__sveltets_2_IsomorphicComponent<{
    name: IconName;
    size?: Size | undefined;
    role?: Role | undefined;
    dark?: boolean | undefined;
    color?: Color | undefined;
    class?: string | undefined;
    label?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Icon = InstanceType<typeof Icon>;
export default Icon;
