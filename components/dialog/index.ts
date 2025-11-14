import { dialogClass, dialogOverlayClass } from "./index.s";

export function Dialog(content: HTMLElement) {
    const container = document.createElement("div");
    container.classList.add(dialogClass);

    const overlay = document.createElement("div");
    overlay.classList.add(dialogOverlayClass);

    container.append(content);

    overlay.append(container);

    document.body.append(overlay);

    return {
        remove: () => overlay.remove(),
    };
}
