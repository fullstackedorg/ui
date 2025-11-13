import { startObserverInterval } from "../observer";
import { checkedClass, inputRadioClass } from "./index.s";

export function InputRadio() {
    startObserverInterval();

    const container = document.createElement("div");
    container.classList.add(inputRadioClass);

    const input = document.createElement("input");
    input.type = "radio";

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
