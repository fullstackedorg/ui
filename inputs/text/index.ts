import { Button } from "../../ui";
import { inputClass } from "../index.s";
import {
    inputTextButtonContainerClass,
    inputTextButtonShowClass,
    inputTextContainerClass,
    inputTextClass,
} from "./index.s";
export type InputOpts = {
    label: string;
    clear: boolean;
};

export function InputText(opts?: Partial<InputOpts>) {
    const container = document.createElement("div");
    container.classList.add(inputClass, inputTextClass);

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const inputContainer = document.createElement("div");
    inputContainer.classList.add(inputTextContainerClass);

    const input = document.createElement("input");
    input.autocapitalize = "off";

    inputContainer.append(input);

    if (opts?.clear) {
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add(inputTextButtonContainerClass);
        const clearButton = Button({
            style: "icon-small",
            iconRight: "Close",
        });
        clearButton.type = "button";
        clearButton.onclick = (e) => {
            input.value = "";
            buttonContainer.classList.remove(inputTextButtonShowClass);
            input.dispatchEvent(new KeyboardEvent("keyup"));
        };
        buttonContainer.append(clearButton);
        inputContainer.append(buttonContainer);
        input.addEventListener("keyup", () => {
            if (input.value) {
                buttonContainer.classList.add(inputTextButtonShowClass);
            } else {
                buttonContainer.classList.remove(inputTextButtonShowClass);
            }
        });
    }

    container.append(inputContainer);

    return {
        container,
        input,
    };
}
