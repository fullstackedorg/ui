import { startObserverInterval } from "../observer";
import { InputOpts } from "../text";

export function InputSwitch(opts?: Partial<InputOpts>) {
    startObserverInterval();
    
    const container = document.createElement("div");
    container.classList.add("input-switch");

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", () => {
        if (input.checked) container.classList.add("checked");
        else container.classList.remove("checked");
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
        container
    };
}
