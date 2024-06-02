import type { AdminModel, FormPayload, ListPayload } from "../../model";
import type { OpenApiObjectSchema, OpenApiSpec } from "./schema";
/** A Response object matching the return type of the `openapi-fetch` client. */
type Response<T = any> = {
    data: T;
    error?: never;
} | {
    data?: never;
    error: any;
};
type ModelConfig<TList = any, TForm = TList> = {
    name: string;
    spec: OpenApiSpec;
    listSchema: OpenApiObjectSchema;
    listExclude?: string[];
    listFeatures?: AdminModel["listFeatures"];
    formSchema?: OpenApiObjectSchema;
    formReadonly?: string[];
    formExclude?: string[];
    list: (...params: Parameters<AdminModel["list"]>) => Promise<Response<ListPayload<TList>>>;
    form?: (...params: Parameters<NonNullable<AdminModel["form"]>>) => Promise<Response<FormPayload<TForm>>>;
};
export declare function makeModel<T = any>(config: ModelConfig<T>): AdminModel<T>;
export {};
