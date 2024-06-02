export function makeModel(config) {
    const listSchema = config.listSchema;
    const listFields = {};
    for (const key in listSchema.properties) {
        const property = resolveSchema(config.spec, listSchema.properties[key]);
        listFields[key] = {
            type: mapFieldTypes(property),
        };
    }
    const formSchema = config.formSchema ?? config.listSchema;
    const formReadonly = config.formReadonly?.slice() ?? [];
    const formFields = {};
    for (const key in listSchema.properties) {
        const property = resolveSchema(config.spec, formSchema.properties[key]);
        formFields[key] = {
            type: mapFieldTypes(property),
        };
        if ("readOnly" in property && property.readOnly) {
            formReadonly.push(key);
        }
    }
    const { list, form } = config;
    return {
        name: config.name,
        listDisplay: config.listExclude
            ? Object.keys(listSchema.properties).filter((col) => !config.listExclude.includes(col))
            : Object.keys(listSchema.properties),
        listFields,
        list: async (params) => {
            const resp = await list(params);
            if (resp.error)
                throw resp.error;
            return resp.data;
        },
        formDisplay: config.formExclude
            ? Object.keys(formSchema.properties).filter((col) => !config.formExclude.includes(col))
            : Object.keys(formSchema.properties),
        formReadonly,
        formFields,
        form: form
            ? async (params) => {
                const resp = await form(params);
                if (resp.error)
                    throw resp.error;
                return resp.data;
            }
            : undefined,
    };
}
function mapFieldTypes(schema) {
    if (!("type" in schema)) {
        return "any";
    }
    switch (schema.type) {
        case "boolean":
            return "bool";
        case "integer":
            switch (schema.format) {
                case "int32":
                case "int64":
                case "uint32":
                case "uint64":
                    return schema.format;
                default:
                    return "int64";
            }
        case "number":
            switch (schema.format) {
                case "float":
                    return "float32";
                case "double":
                    return "float64";
                default:
                    return "float64";
            }
        case "string":
            if ("enum" in schema) {
                return "enum";
            }
            switch (schema.format) {
                case "date":
                case "uuid":
                case "ipv4":
                case "ipv6":
                case "email":
                case "password":
                    return schema.format;
                case "uri":
                    return "uri";
                case "date-time":
                    return "datetime";
                default:
                    return "text";
            }
        default:
            return "any";
    }
}
function resolveSchema(spec, ref) {
    let item = ref;
    // recursively resolve $refs
    let visited = new Set([]);
    while (item.$ref || item.allOf) {
        if (item.allOf) {
            const combined = {};
            for (const child of item.allOf) {
                Object.assign(combined, resolveSchema(spec, child));
            }
            item = combined;
            continue;
        }
        if (visited.has(item.$ref) || !item.$ref.startsWith("#/components/schema/")) {
            return {};
        }
        visited.add(item.$ref);
        // extract value using the string path
        for (const key of item.$ref.split("/").slice(1)) {
            if (!item) {
                return {};
            }
            item = item[key];
        }
    }
    return item ?? {};
}
