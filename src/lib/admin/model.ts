/** A JSONAPI-like list response payload. */
export type ListPayload<T> = {
    data: T[];
    meta?: {
        total?: number;
    };
};

/** A JSONAPI-like form response payload. */
export type FormPayload<T> = {
    data: T;
};

type ListModel<T> = {
    listFields: { [key: string]: Field };
    listFeatures?: { sort?: boolean; paginate?: boolean; filter?: boolean; search?: boolean };
    listDisplay: string[];
    list(params?: {
        sort?: string;
        page?: { offset?: number; limit?: number };
        filter?: { [key: string]: string | number | boolean | null };
        search?: string;
    }): Promise<ListPayload<T>> | ListPayload<T>;
};

type FormConfig<T> = {
    formFields: { [key: string]: Field };
    formDisplay: string[];
    formReadonly?: string[];
};

type FormModel<T> =
    | (FormConfig<T> & { form(id: string): Promise<FormPayload<T>> | FormPayload<T> })
    | (Partial<FormConfig<T>> & { form?: never });

export type AdminModel<TList = any, TForm = TList> = { name: string } & ListModel<TList> & FormModel<TForm>;

export type Field = {
    type: FieldType;
    enum?: string[];
    references?: { model: ListModel<any>; foreignKey: string; nameKey?: string };
};

export type FieldType =
    | "bool"
    | "int32"
    | "int64"
    | "uint32"
    | "uint64"
    | "float32"
    | "float64"
    | "text"
    | "enum"
    | "uuid"
    | "uri"
    | "ipv4"
    | "ipv6"
    | "date"
    | "datetime"
    | "email"
    | "password"
    | "any";
