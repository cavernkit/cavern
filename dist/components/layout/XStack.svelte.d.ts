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
declare const XStack: $$__sveltets_2_IsomorphicComponent<{
    spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    justify?: "left" | "center" | "right" | undefined;
    class?: string | undefined;
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type XStack = InstanceType<typeof XStack>;
export default XStack;
