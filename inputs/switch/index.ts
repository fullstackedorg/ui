import { startObserverInterval } from "../observer";
import { InputOpts } from "../text";
import { inputClass } from "../index.s";
import { checkedClass, inputSwitchClass } from "./index.s";

export function InputSwitch(opts?: Partial<InputOpts>) {
    startObserverInterval();

    const container = document.createElement("div");
    container.classList.add(inputClass, inputSwitchClass);

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", () => {
        if (input.checked) container.classList.add(checkedClass);
        else container.classList.remove(checkedClass);
    });

    container.append(input);

    const overrideUI = document.createElement("div");

    const switchEl = document.createElement("div");
    switchEl.onclick = () => input.click();

    switchEl.innerHTML = `<div></div>`;
    overrideUI.append(switchEl);
    container.append(overrideUI);

    return {
        input,
        container,
    };
}
