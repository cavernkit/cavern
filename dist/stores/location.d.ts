/// <reference types="svelte" />
import type { Readable } from "svelte/store";
export declare function createLocationStore(ssrUrl?: string): Readable<URL>;
export declare const location: Readable<URL>;
