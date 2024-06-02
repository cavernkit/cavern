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
/**
 * An unstyled wrapper around another element to make it into an `<a>` or `<button>`,
 * for example to use at the top-level of tables cells (`<td>`) or list items (`<li>`).
 *
 * It uses `display: contents` to avoid affecting CSS box layout.
 */
declare const Clickable: $$__sveltets_2_IsomorphicComponent<{
    label: string;
    href?: string | undefined;
    disabled?: boolean | undefined;
    tabindex?: number | undefined;
    children: Snippet;
    onclick?: ((event: MouseEvent) => unknown) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Clickable = InstanceType<typeof Clickable>;
export default Clickable;
