/// <reference types="svelte" />
import type { Field } from "../../model";
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
declare const ModelCell: $$__sveltets_2_IsomorphicComponent<{
    row: any;
    col: string;
    field: Field;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type ModelCell = InstanceType<typeof ModelCell>;
export default ModelCell;
