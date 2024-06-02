import { writable } from "svelte/store";
const defaults = {
    duration: 5000,
    dismissable: true,
};
export function createToastsStore() {
    if (typeof window === "undefined") {
        const toasts = writable([]);
        return {
            subscribe: toasts.subscribe,
            info() { },
            warn() { },
            error() { },
            success() { },
            clear() { },
        };
    }
    let nextToastId = 1;
    const toasts = writable([]);
    const push = (type, message, options = {}) => {
        const toast = {
            ...defaults,
            ...options,
            ...(typeof message === "string" ? { title: message } : message),
            type,
            id: nextToastId,
        };
        nextToastId += 1;
        toasts.update((arr) => [...arr, toast]);
        if (toast.duration) {
            setTimeout(() => {
                toasts.update((arr) => arr.filter((t) => t !== toast));
            }, toast.duration);
        }
    };
    return {
        subscribe: toasts.subscribe,
        info(message, options = {}) {
            push("info", message, options);
        },
        warn(message, options = {}) {
            push("warning", message, options);
        },
        error(message, options = {}) {
            push("error", message, options);
        },
        success(message, options = {}) {
            push("success", message, options);
        },
        clear() {
            toasts.set([]);
        },
    };
}
export const toasts = createToastsStore();
