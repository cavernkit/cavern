/**
 * For fuzzy filtering we want to allow the search to work regardless of word order.
 * We also support exact search of double-quoted text, a la traditional google search (pre-enshitification).
 *
 * So this is the sort of thing we want to generate:
 *
 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
 */
export declare function toSmartSearch(search: string): RegExp;
