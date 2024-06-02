/// <reference types="svelte" />
import type { AdminModel } from "../model";
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
declare const ListPage: $$__sveltets_2_IsomorphicComponent<{
    model: AdminModel;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type ListPage = InstanceType<typeof ListPage>;
export default ListPage;
