/// <reference types="svelte" />
import type { Action } from "svelte/action";
/** Prevents focus from selecting elements that are not children of the root element.  */
export declare function focusTrap(element: HTMLElement): ReturnType<Action<HTMLElement>>;
/** Adds a tabIndex to all scrollable children of the element */
export declare function makeFocusable(element: HTMLElement): void;
export declare function preventWheel(element: HTMLElement): void;
export declare function stopWheel(element: HTMLElement): void;
/** Determines whether an element is scrollable  */
export declare function isScrollable(e: HTMLElement): boolean[];
/** Determines whether two elements intersect */
export declare function intersects(a: HTMLElement, b: HTMLElement): boolean;
