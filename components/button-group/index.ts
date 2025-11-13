import "./index.s";
import { Button } from "../../primitives/button";

export function ButtonGroup(buttons: ReturnType<typeof Button>[]) {
    const container = document.createElement("div");
    container.classList.add("button-group");
    container.append(...buttons);
    return container;
}
