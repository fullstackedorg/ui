import { Icon } from "../../primitives/icon";
import { loaderClass } from "./index.s";

export function Loader() {
    const container = document.createElement("div");
    container.classList.add(loaderClass);

    const dummy = document.createElement("div");
    container.append(dummy);

    const icon = Icon("Loader");
    container.append(icon);

    return container;
}
