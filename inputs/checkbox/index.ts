import { startObserverInterval } from "../observer";

export function InputCheckbox() {
    startObserverInterval();

    const container = document.createElement("div");
    container.classList.add("input-checkbox");

    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", () => {
        if (input.checked) container.classList.add("checked");
        else container.classList.remove("checked");
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
