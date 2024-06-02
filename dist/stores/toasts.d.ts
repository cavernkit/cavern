/// <reference types="svelte" />
type Message = string | {
    title: string;
    details?: string;
};
interface ToastOptions {
    duration: number | null;
    dismissable: boolean;
}
export interface Toast extends ToastOptions {
    id: number;
    type: "success" | "warning" | "error" | "info";
    title: string;
    details?: string;
}
export declare function createToastsStore(): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Toast[]>, invalidate?: import("svelte/store").Invalidator<Toast[]> | undefined) => import("svelte/store").Unsubscriber;
    info(message: Message, options?: Partial<ToastOptions>): void;
    warn(message: Message, options?: Partial<ToastOptions>): void;
    error(message: Message, options?: Partial<ToastOptions>): void;
    success(message: Message, options?: Partial<ToastOptions>): void;
    clear(): void;
};
export declare const toasts: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Toast[]>, invalidate?: import("svelte/store").Invalidator<Toast[]> | undefined) => import("svelte/store").Unsubscriber;
    info(message: Message, options?: Partial<ToastOptions>): void;
    warn(message: Message, options?: Partial<ToastOptions>): void;
    error(message: Message, options?: Partial<ToastOptions>): void;
    success(message: Message, options?: Partial<ToastOptions>): void;
    clear(): void;
};
export {};
