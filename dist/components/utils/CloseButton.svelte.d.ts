import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label?: string | undefined;
        href?: string | undefined;
        type?: "button" | "submit" | undefined;
        class?: string | undefined;
        disabled?: boolean | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CloseButtonProps = typeof __propDef.props;
export type CloseButtonEvents = typeof __propDef.events;
export type CloseButtonSlots = typeof __propDef.slots;
export default class CloseButton extends SvelteComponent<CloseButtonProps, CloseButtonEvents, CloseButtonSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        label?: string | undefined;
        href?: string | undefined;
        type?: "button" | "submit" | undefined;
        class?: string | undefined;
        disabled?: boolean | undefined;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    }>);
    $$bindings: "";
}
export {};
