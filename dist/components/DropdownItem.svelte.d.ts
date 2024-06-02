import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        href?: string | undefined;
        disabled?: boolean | undefined;
        children: Snippet;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DropdownItemProps = typeof __propDef.props;
export type DropdownItemEvents = typeof __propDef.events;
export type DropdownItemSlots = typeof __propDef.slots;
export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        label: string;
        href?: string | undefined;
        disabled?: boolean | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    }>);
    $$bindings: "";
}
export {};
