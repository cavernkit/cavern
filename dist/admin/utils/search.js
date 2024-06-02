/**
 * For fuzzy filtering we want to allow the search to work regardless of word order.
 * We also support exact search of double-quoted text, a la traditional google search (pre-enshitification).
 *
 * So this is the sort of thing we want to generate:
 *
 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
 */
export function toSmartSearch(search) {
    // Implementation copied from JQuery Datatables (MIT License)
    // https://github.com/DataTables/DataTablesSrc/blob/1.13.9/js/core/core.filter.js#L287
    const terms = search.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [''];
    const expressions = terms.map((word) => {
        if (word.charAt(0) === '"') {
            const m = word.match(/^"(.*)"$/);
            word = m ? m[1] : word;
        }
        else if (word.charAt(0) === '\u201C') {
            const m = word.match(/^\u201C(.*)\u201D$/);
            word = m ? m[1] : word;
        }
        return word.replace('"', '');
    });
    return new RegExp('^(?=.*?' + expressions.join(')(?=.*?') + ').*$', 'im');
}
