/// <reference types="svelte" />
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
    bindings(): "value";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends string | boolean | number | null = string>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends string | boolean | number | null = string>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Fieldset: $$IsomorphicComponent;
type Fieldset<T extends string | boolean | number | null = string> = InstanceType<typeof Fieldset<T>>;
export default Fieldset;
