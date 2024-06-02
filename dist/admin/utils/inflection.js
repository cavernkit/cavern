const formatWords = {
    id: "ID",
    uuid: "UUID",
    url: "URL",
    http: "HTTP",
    ipv4: "IPv4",
    ipv6: "IPv6",
};
const stopWords = {
    the: "the",
    for: "for",
    has: "has",
    with: "with",
    and: "and",
    or: "or",
    in: "in",
    at: "at",
    on: "on",
    of: "of",
    by: "by",
    a: "a",
};
export function humanize(identifier) {
    return identifier
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .trim()
        .split(/[-_]/g)
        .map((w, i) => formatWords[w] ?? (i > 0 ? stopWords[w] : null) ?? `${w[0].toUpperCase()}${w.slice(1)}`)
        .join(" ");
}
/** Fast and small approximate pluralization of english words */
export function pluralize(word) {
    if (word.length < 2) {
        return word;
    }
    const last = word[word.length - 1];
    const last2nd = word[word.length - 2];
    switch (last) {
        case "y":
            if (["a", "e", "i", "o", "u"].includes(last2nd)) {
                return `${word}s`;
            }
            else {
                return `${word.slice(0, -1)}ies`;
            }
        case "s":
            if (last2nd === "u") {
                return `${word.slice(0, -2)}i`;
            }
            else if (last2nd === "i") {
                return `${word.slice(0, -2)}es`;
            }
            else {
                return `${word}es`;
            }
        case "x":
            return `${word}es`;
        default:
            return `${word}s`;
    }
}
