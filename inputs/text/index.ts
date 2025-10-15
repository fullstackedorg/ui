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
            buttonContainer.classList.remove("show");
            input.dispatchEvent(new KeyboardEvent("keyup"));
        };
        buttonContainer.append(clearButton);
        inputContainer.append(buttonContainer);
        input.addEventListener("keyup", () => {
            if (input.value) {
                buttonContainer.classList.add("show");
            } else {
                buttonContainer.classList.remove("show");
            }
        });
    }

    container.append(inputContainer);

    return {
        container,
        input,
    };
}
