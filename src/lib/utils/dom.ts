import type { Action } from "svelte/action";

/** Prevents focus from selecting elements that are not children of the root element.  */
export function focusTrap(element: HTMLElement): ReturnType<Action<HTMLElement>> {
    function handleFocusTrap(e: KeyboardEvent): void {
        const isTabPressed = e.key === "Tab" || e.keyCode === 9;
        if (!isTabPressed) {
            return;
        }

        const focusable = Array.from(element.querySelectorAll(selectorFocusable));
        let index = focusable.indexOf(document.activeElement ?? element);
        if (index === -1 && e.shiftKey) {
            index = 0;
        }
        index += focusable.length + (e.shiftKey ? -1 : 1);
        index %= focusable.length;
        /** @ts-expect-error Element is focusable */
        focusable[index].focus();

        e.preventDefault();
    }

    document.addEventListener("keydown", handleFocusTrap, true);

    return {
        destroy() {
            document.removeEventListener("keydown", handleFocusTrap, true);
        },
    };
}
const selectorFocusable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

/** Adds a tabIndex to all scrollable children of the element */
export function makeFocusable(element: HTMLElement) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);
    let n: Node | null;
    while ((n = walker.nextNode())) {
        if (n instanceof HTMLElement) {
            const el = n;
            const [x, y] = isScrollable(el);
            if (x || y) {
                el.tabIndex = 0;
            }
        }
    }
    element.focus();
}

export function preventWheel(element: HTMLElement) {
    element.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
}
export function stopWheel(element: HTMLElement) {
    element.addEventListener("wheel", (event) => event.stopPropagation(), { passive: true });
}

/** Determines whether an element is scrollable  */
export function isScrollable(e: HTMLElement): boolean[] {
    return [
        e.scrollWidth > e.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowX) >= 0,
        e.scrollHeight > e.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowY) >= 0,
    ];
}

/** Determines whether two elements intersect */
export function intersects(a: HTMLElement, b: HTMLElement) {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return (
        rectA.top <= rectB.bottom && rectA.bottom >= rectB.top && rectA.left <= rectB.right && rectA.right >= rectB.left
    );
}
