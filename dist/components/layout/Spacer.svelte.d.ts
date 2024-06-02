export default Spacer;
type Spacer = SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string | undefined;
} & Record<string, any>;
declare const Spacer: $$__sveltets_2_IsomorphicComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, string>;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings | undefined;
    } & Exports;
    (internal: unknown, props: {
        $$events?: Events | undefined;
        $$slots?: Slots | undefined;
    }): Exports;
    z_$$bindings?: Bindings | undefined;
}
import { SvelteComponent } from "svelte";
