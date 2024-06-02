import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        links: {
            label: string;
            href: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BreadcrumbProps = typeof __propDef.props;
export type BreadcrumbEvents = typeof __propDef.events;
export type BreadcrumbSlots = typeof __propDef.slots;
export default class Breadcrumb extends SvelteComponent<BreadcrumbProps, BreadcrumbEvents, BreadcrumbSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        links: {
            label: string;
            href: string;
        }[];
    }>);
    $$bindings: "";
}
export {};
