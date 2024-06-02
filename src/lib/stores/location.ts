import { writable } from "svelte/store";
import type { Readable } from "svelte/store";

export function createLocationStore(ssrUrl?: string): Readable<URL> {
    if (typeof window === "undefined") {
        const url = writable(new URL(ssrUrl || ""));
        return { subscribe: url.subscribe };
    }

    const url = writable(new URL(window.location.href));
    const update = () => url.set(new URL(window.location.href));
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    history.pushState = function (...args: any) {
        originalPushState.apply(this, args);
        update();
    };
    history.replaceState = function (...args: any) {
        originalReplaceState.apply(this, args);
        update();
    };
    window.addEventListener("popstate", update);
    window.addEventListener("hashchange", update);

    return { subscribe: url.subscribe };
}

export const location = createLocationStore();
