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
declare const Toast: $$__sveltets_2_IsomorphicComponent<{
    icon?: IconName | undefined;
    color?: "primary" | "success" | "warning" | "error" | "info" | "dark" | undefined;
    title: string;
    details?: string | undefined;
    dismissable?: boolean | undefined;
    ondismiss?: (() => void) | undefined;
    more?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Toast = InstanceType<typeof Toast>;
export default Toast;
