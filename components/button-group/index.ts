import { Button } from "../../primitives/button";
import { buttonGroupClass } from "./index.s";

export function ButtonGroup(buttons: ReturnType<typeof Button>[]) {
    const container = document.createElement("div");
    container.classList.add(buttonGroupClass);
    container.append(...buttons);
    return container;
}
