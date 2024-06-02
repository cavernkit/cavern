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
declare const YStack: $$__sveltets_2_IsomorphicComponent<{
    spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    class?: string | undefined;
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type YStack = InstanceType<typeof YStack>;
export default YStack;
