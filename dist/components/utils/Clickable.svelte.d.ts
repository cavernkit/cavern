import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        href?: string | undefined;
        disabled?: boolean | undefined;
        tabindex?: number | undefined;
        children: Snippet;
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ClickableProps = typeof __propDef.props;
export type ClickableEvents = typeof __propDef.events;
export type ClickableSlots = typeof __propDef.slots;
/**
 * An unstyled wrapper around another element to make it into an `<a>` or `<button>`,
 * for example to use at the top-level of tables cells (`<td>`) or list items (`<li>`).
 *
 * It uses `display: contents` to avoid affecting CSS box layout.
 */
export default class Clickable extends SvelteComponent<ClickableProps, ClickableEvents, ClickableSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        label: string;
        href?: string | undefined;
        disabled?: boolean | undefined;
        tabindex?: number | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        onclick?: ((event: MouseEvent) => unknown) | undefined;
    }>);
    $$bindings: "";
}
export {};
