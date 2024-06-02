import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        status?: string | number | null | undefined;
        message?: string | null | undefined;
    } & ({
        actions?: undefined;
        home?: string | {
            href: string;
            label: string;
        } | undefined;
    } | {
        actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        home?: undefined;
    });
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ErrorPageProps = typeof __propDef.props;
export type ErrorPageEvents = typeof __propDef.events;
export type ErrorPageSlots = typeof __propDef.slots;
export default class ErrorPage extends SvelteComponent<ErrorPageProps, ErrorPageEvents, ErrorPageSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        title: string;
        status?: string | number | null | undefined;
        message?: string | null | undefined;
    } & ({
        actions?: undefined;
        home?: string | {
            href: string;
            label: string;
        } | undefined;
    } | {
        actions?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        home?: undefined;
    })>);
    $$bindings: "";
}
export {};
