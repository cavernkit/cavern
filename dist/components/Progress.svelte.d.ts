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
declare const Progress: $$__sveltets_2_IsomorphicComponent<{
    size?: "sm" | "md" | undefined;
    total?: number | undefined;
    label?: string | undefined;
    tooltip?: string | false | undefined;
    progress?: number | {
        value: number;
        color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
        label?: string | null | undefined;
        tooltip?: string | null | undefined;
    } | {
        value: number;
        color?: ("primary" | "success" | "warning" | "error" | "info") | undefined;
        label?: string | null | undefined;
        tooltip?: string | null | undefined;
    }[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Progress = InstanceType<typeof Progress>;
export default Progress;
