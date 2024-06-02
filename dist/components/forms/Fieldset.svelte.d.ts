import { SvelteComponent } from "svelte";
declare class __sveltets_Render<T extends string | boolean | number | null = string> {
    props(): {
        legend: string;
        description?: string | ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        required?: boolean | undefined;
        class?: string | undefined;
    } & ({
        value?: T | undefined;
        options: T extends string ? (string | {
            label: string;
            value: T;
        })[] : {
            label: string;
            value: T;
        }[];
        disabled?: boolean | undefined;
        children?: undefined;
    } | {
        value?: undefined;
        options?: undefined;
        disabled?: undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    });
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type FieldsetProps<T extends string | boolean | number | null = string> = ReturnType<__sveltets_Render<T>['props']>;
export type FieldsetEvents<T extends string | boolean | number | null = string> = ReturnType<__sveltets_Render<T>['events']>;
export type FieldsetSlots<T extends string | boolean | number | null = string> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Fieldset<T extends string | boolean | number | null = string> extends SvelteComponent<FieldsetProps<T>, FieldsetEvents<T>, FieldsetSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "";
}
export {};
