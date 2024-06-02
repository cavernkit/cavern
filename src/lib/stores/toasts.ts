import { writable } from "svelte/store";

type Message = string | { title: string; details?: string };

interface ToastOptions {
    duration: number | null; // duration to show toast in ms (or null for until dismissed)
    dismissable: boolean; // allow dismiss with close button
}

const defaults: ToastOptions = {
    duration: 5000,
    dismissable: true,
};

export interface Toast extends ToastOptions {
    id: number;
    type: "success" | "warning" | "error" | "info";
    title: string;
    details?: string;
}

export function createToastsStore() {
    if (typeof window === "undefined") {
        const toasts = writable([] as Toast[]);
        return {
            subscribe: toasts.subscribe,
            info() {},
            warn() {},
            error() {},
            success() {},
            clear() {},
        };
    }

    let nextToastId = 1;
    const toasts = writable([] as Toast[]);

    const push = (
        type: "success" | "warning" | "error" | "info",
        message: Message,
        options: Partial<ToastOptions> = {},
    ) => {
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
        info(message: Message, options: Partial<ToastOptions> = {}) {
            push("info", message, options);
        },
        warn(message: Message, options: Partial<ToastOptions> = {}) {
            push("warning", message, options);
        },
        error(message: Message, options: Partial<ToastOptions> = {}) {
            push("error", message, options);
        },
        success(message: Message, options: Partial<ToastOptions> = {}) {
            push("success", message, options);
        },
        clear() {
            toasts.set([]);
        },
    };
}

export const toasts = createToastsStore();
