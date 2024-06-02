import { SvelteComponent } from "svelte";
export interface Tab {
    label: string;
    value: string;
    href?: string;
}
declare class __sveltets_Render<T extends Tab = Tab> {
    props(): {
        tabs: T[];
        activeTab: string;
        children?: ((this: void, args_0: Tab) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        onselect?: ((tab: Tab) => void) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type TabListProps<T extends Tab = Tab> = ReturnType<__sveltets_Render<T>['props']>;
export type TabListEvents<T extends Tab = Tab> = ReturnType<__sveltets_Render<T>['events']>;
export type TabListSlots<T extends Tab = Tab> = ReturnType<__sveltets_Render<T>['slots']>;
export default class TabList<T extends Tab = Tab> extends SvelteComponent<TabListProps<T>, TabListEvents<T>, TabListSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "";
}
export {};
