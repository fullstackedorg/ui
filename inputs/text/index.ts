import { Button } from "../../ui";
export type InputOpts = {
    label: string;
    clear: boolean;
};

export function InputText(opts?: Partial<InputOpts>) {
    const container = document.createElement("div");
    container.classList.add("input-text");

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const input = document.createElement("input");
    input.autocapitalize = "off";

    inputContainer.append(input);

    if (opts?.clear) {
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        const clearButton = Button({
            style: "icon-small",
            iconRight: "Close",
        });
        clearButton.type = "button";
        clearButton.onclick = (e) => {
            input.value = "";
            input.onchange?.(e);
            input.focus();
        };
        buttonContainer.append(clearButton);
        inputContainer.append(buttonContainer);
    }

    container.append(inputContainer);

    return {
        container,
        input,
    };
}
