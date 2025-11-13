import { startObserverInterval } from "../observer";
import { inputCheckboxClass } from "./index.s";
import { checkedClass } from "../radio/index.s";

export function InputCheckbox() {
    startObserverInterval();

    const container = document.createElement("div");
    container.classList.add(inputCheckboxClass);

    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", () => {
        if (input.checked) container.classList.add(checkedClass);
        else container.classList.remove(checkedClass);
    });

    const overrideUI = document.createElement("div");
    overrideUI.onclick = () => input.click();

    overrideUI.innerHTML = "<div></div>";

    container.append(input, overrideUI);

    return {
        container,
        input,
    };
}
