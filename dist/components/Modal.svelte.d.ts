export type Placement = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
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
declare const Modal: $$__sveltets_2_IsomorphicComponent<{
    open?: boolean | undefined;
    title?: string | undefined;
    class?: string | undefined;
    placement?: Placement | undefined;
    dismissable?: boolean | undefined;
    ondismiss?: (() => void) | undefined;
    children: Snippet;
    header?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
    footer?: ((this: void) => typeof import("svelte").SnippetReturn & {
        _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
    }) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "open">;
type Modal = InstanceType<typeof Modal>;
export default Modal;
