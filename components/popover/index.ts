import { popoverOverlayClass, posX, posY, popoverClass } from "./index.s";

type PopoverOpts = {
    anchor: HTMLElement;
    content: HTMLElement;
    align: {
        y: keyof typeof posY;
        x: keyof typeof posX;
    };
};

export function Popover(opts: PopoverOpts) {
    const anchorBB = opts.anchor.getBoundingClientRect();

    const container = document.createElement("div");
    container.classList.add(popoverClass);

    let x = anchorBB.x + document.body.scrollLeft;
    let y = anchorBB.y + document.body.scrollTop;

    switch (opts.align.x) {
        case "center":
            container.classList.add(posX.center);
            x += anchorBB.width / 2;
            break;
        case "right":
            container.classList.add(posX.right);
            x += anchorBB.width;
            break;
    }

    switch (opts.align.y) {
        case "center":
            container.classList.add(posY.center);
            y += anchorBB.height / 2;
            break;
        case "bottom":
            container.classList.add(posY.bottom);
            y += anchorBB.height;
            break;
    }

    container.style.left = x + "px";
    container.style.top = y + "px";

    const overlay = document.createElement("div");
    overlay.classList.add(popoverOverlayClass);

    container.append(opts.content);

    const remove = () => {
        overlay.remove();
        container.remove();
        window.removeEventListener("resize", remove);
        unlockScroll(lockedElements);
    };

    container.addEventListener("click", (e) => {
        e.stopPropagation();
        remove();
    });

    container.addEventListener("scroll", (e) => {
        e.stopPropagation();
        remove();
    });

    overlay.onclick = (e) => {
        e.stopPropagation();
        remove();
    };

    window.addEventListener("resize", remove);

    let lockedElements = lockScroll(opts.anchor);
    document.body.append(overlay, container);

    return {
        remove
    };
}

const lockedScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
};

const keys = ["ArrowDown", "ArrowUp", "PageUp", "PageDown"];
const lockedKeys = (e: KeyboardEvent) => {
    if (keys.includes(e.key)) {
        return lockedScroll(e);
    }
};

function lockScroll(el: HTMLElement, lockedElements: HTMLElement[] = []) {
    lockedElements.push(el);
    el.addEventListener("scroll", lockedScroll);
    el.addEventListener("wheel", lockedScroll);
    el.addEventListener("touchmove", lockedScroll);
    el.addEventListener("keydown", lockedKeys);
    if (el.parentElement) {
        lockScroll(el.parentElement, lockedElements);
    }
    return lockedElements;
}

function unlockScroll(els: HTMLElement[]) {
    els.forEach((el) => {
        el.removeEventListener("scroll", lockedScroll);
        el.removeEventListener("wheel", lockedScroll);
        el.removeEventListener("touchmove", lockedScroll);
        el.removeEventListener("keydown", lockedKeys);
    });
}
