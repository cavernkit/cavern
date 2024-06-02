export type OpenApiSpec = {
    components: {
        schemas: { [key: string]: OpenApiSchema };
    };
};

export type OpenApiSchema =
    | OpenApiObjectSchema
    | (OpenApiPropertyType & OpenApiPropertyOptions)
    | { $ref: `#/components/schemas/${string}` }
    | { allOf: readonly [{ $ref: `#/components/schemas/${string}` }, OpenApiPropertyOptions] }
    | { anyOf: readonly OpenApiSchema[] }
    | {};

export type OpenApiSchemaResolved =
    | OpenApiObjectSchema
    | (OpenApiPropertyType & OpenApiPropertyOptions)
    | { anyOf: readonly OpenApiSchema[] }
    | {};

export type OpenApiObjectSchema = {
    type: "object";
    required?: readonly string[];
    properties: { [key: string]: OpenApiSchema };
    additionalProperties?: boolean | EmptyObject;
    minProperties?: number;
    maxProperties?: number;
};

type EmptyObject = { [empty: string]: never };
type OpenApiStringFormat =
    | "date"
    | "date-time"
    | "password"
    | "byte"
    | "binary"
    | "email"
    | "uuid"
    | "uri"
    | "hostname"
    | "ipv4"
    | "ipv6";
type OpenApiNumberFormat = "float" | "double";
type OpenApiIntegerFormat = "int32" | "int64" | "uint32" | "uint64";
type OpenApiPropertyOptions = { nullable?: boolean; readOnly?: boolean; writeOnly?: boolean };
type OpenApiPropertyType =
    | { type: "boolean" }
    | { type: "string"; format?: OpenApiStringFormat; pattern?: string }
    | { type: "string"; enum: readonly string[] }
    | {
          type: "number";
          format?: OpenApiNumberFormat;
          minimum?: number;
          maximum?: number;
          exclusiveMinimum?: boolean;
          exclusiveMaximum?: boolean;
          multipleOf?: number;
      }
    | {
          type: "integer";
          format?: OpenApiIntegerFormat;
          minimum?: number;
          maximum?: number;
          exclusiveMinimum?: boolean;
          exclusiveMaximum?: boolean;
          multipleOf?: number;
      }
    | { type: "array"; items: OpenApiArrayItem; minItems?: number; maxItems?: number; uniqueItems?: boolean };
type OpenApiArrayItem = OpenApiSchema | { oneOf: readonly OpenApiSchema[] } | EmptyObject;
