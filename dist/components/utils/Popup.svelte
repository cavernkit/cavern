<script lang="ts">import * as dom from "@floating-ui/dom";
import { onMount } from "svelte";
let {
  open = false,
  role,
  arrow = true,
  offset = 8,
  interactive = false,
  placement = "top",
  strategy = "absolute",
  trigger = "hover",
  class: className,
  for: reference,
  onshow,
  onhide,
  children
} = $props();
const clickable = $derived(trigger === "click");
const hoverable = $derived(trigger === "hover");
let referenceEl = $state(document.body);
let contentEl = $state();
let floatingEl;
let arrowEl;
let triggerEls = [];
let _blocked = false;
const block = () => (_blocked = true, setTimeout(() => _blocked = false, 250));
const hasHover = (el) => el.matches(":hover");
const hasFocus = (el) => el.contains(document.activeElement);
const px = (n) => n != null ? `${n}px` : "";
const showHandler = (ev) => {
  if (!reference && triggerEls.includes(ev.target) && referenceEl !== ev.target) {
    referenceEl = ev.target;
    block();
  }
  if (clickable && ev.type === "focusin" && !open) {
    block();
  }
  open = clickable && ev.type === "click" && !_blocked ? !open : true;
  onshow?.();
};
const hideHandler = (ev) => {
  if (interactive) {
    setTimeout(() => {
      const elements = [referenceEl, floatingEl, ...triggerEls].filter(Boolean);
      if (ev.type === "mouseleave" && elements.some(hasHover)) {
        return;
      }
      if (ev.type === "focusout" && elements.some(hasFocus)) {
        return;
      }
      open = false;
      onhide?.();
    }, 100);
  } else if (open) {
    open = false;
    onhide?.();
  }
};
function handleIf(pred, func) {
  return pred ? func : () => void 0;
}
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
let arrowSide = $state(oppositeSideMap[placement.split("-")[0]]);
const middleware = $derived([
  dom.flip(),
  dom.shift(),
  dom.offset(+offset),
  arrowEl && dom.arrow({ element: arrowEl, padding: 10 })
]);
function init(node) {
  floatingEl = node;
  let cleanup = dom.autoUpdate(referenceEl, floatingEl, updatePosition);
  return {
    update(_referenceEl) {
      cleanup();
      cleanup = dom.autoUpdate(referenceEl, floatingEl, updatePosition);
    },
    destroy() {
      cleanup();
    }
  };
}
function initArrow(node) {
  arrowEl = node;
  return {
    destroy() {
      arrowEl = void 0;
    }
  };
}
function updatePosition() {
  void dom.computePosition(referenceEl, floatingEl, {
    placement,
    strategy,
    middleware
  }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
    floatingEl.style.position = strategy2;
    floatingEl.style.left = px(x);
    floatingEl.style.top = px(y);
    if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
      arrowEl.style.left = px(middlewareData.arrow.x);
      arrowEl.style.top = px(middlewareData.arrow.y);
      arrowSide = oppositeSideMap[placement2.split("-")[0]];
      arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2);
    }
  });
}
onMount(() => {
  const events = [
    // show and hide the handler when focus changes (e.g. for a button or input)
    ["focusin", showHandler, true],
    ["focusout", hideHandler, true],
    ["click", showHandler, clickable],
    ["mouseenter", showHandler, hoverable],
    ["mouseleave", hideHandler, hoverable]
  ];
  triggerEls = contentEl?.previousElementSibling ? [contentEl.previousElementSibling] : [];
  for (const element of triggerEls) {
    if (element.tabIndex < 0) {
      element.tabIndex = 0;
    }
    for (const [name, handler, cond] of events) {
      if (cond) {
        element.addEventListener(name, handler);
      }
    }
  }
  if (reference) {
    referenceEl = document.querySelector(reference) ?? document.body;
    if (referenceEl === document.body) {
      console.error(`Popup reference not found: '${reference}'`);
    } else {
      referenceEl.addEventListener("focusout", hideHandler);
      if (hoverable) {
        referenceEl.addEventListener("mouseleave", hideHandler);
      }
    }
  } else if (triggerEls.length) {
    referenceEl = triggerEls[0];
  } else if (contentEl?.parentElement) {
    referenceEl = contentEl.parentElement;
  } else {
    console.error(`Popup has no trigger`);
    referenceEl = document.body;
  }
  if (referenceEl === document.activeElement) {
    open = true;
  }
  return () => {
    for (const element of triggerEls) {
      if (element) {
        for (const [name, handler] of events) {
          element.removeEventListener(name, handler);
        }
      }
    }
    if (referenceEl) {
      referenceEl.removeEventListener("focusout", hideHandler);
      referenceEl.removeEventListener("mouseleave", hideHandler);
    }
  };
});
</script>

{#if referenceEl === document.body}
    <div bind:this={contentEl}></div>
{/if}

{#if open && referenceEl}
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
        use:init
        {role}
        class={className ? `Popup ${className}` : "Popup"}
        tabindex={interactive ? -1 : undefined}
        onfocusin={handleIf(interactive, showHandler)}
        onfocusout={handleIf(interactive, hideHandler)}
        onmouseenter={handleIf(interactive, showHandler)}
        onmouseleave={handleIf(interactive, hideHandler)}
    >
        {@render children()}
        {#if arrow}
            <div use:initArrow class="arrow" data-placement={arrowSide}></div>
        {/if}
    </div>
{/if}

<style>
    .Popup {
        background: white;
        border: 1px solid var(--theme-border-light);
        border-radius: var(--rounded-lg);
        box-shadow:
            0 0 #0000,
            0 0 #0000,
            0 1px 2px 0 rgba(0, 0, 0, 0.05);
        z-index: var(--z-tooltip);
    }
    .Popup .arrow {
        position: absolute;
        pointer-events: none;
        display: block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        background: inherit;
        border-color: inherit;
        border-style: inherit;
        border-width: 0;
    }
    .Popup .arrow[data-placement="bottom"] {
        border-bottom-width: 1px;
        border-inline-end-width: 1px;
    }
    .Popup .arrow[data-placement="top"] {
        border-top-width: 1px;
        border-inline-start-width: 1px;
    }
    .Popup .arrow[data-placement="right"] {
        border-top-width: 1px;
        border-inline-end-width: 1px;
    }
    .Popup .arrow[data-placement="left"] {
        border-bottom-width: 1px;
        border-inline-start-width: 1px;
    }
</style>
