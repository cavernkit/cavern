/// <reference types="svelte" />
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
declare const Breadcrumb: $$__sveltets_2_IsomorphicComponent<{
    class?: string | undefined;
    links: {
        label: string;
        href: string;
    }[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Breadcrumb = InstanceType<typeof Breadcrumb>;
export default Breadcrumb;
