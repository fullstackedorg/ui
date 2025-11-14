import { Button } from "../../primitives/button";
import { startObserverInterval } from "../observer";
import { InputOpts } from "../text";
import { inputClass } from "../index.s";
import { inputFileClass } from "./index.s";

export function InputFile(opts?: Partial<InputOpts>) {
    startObserverInterval();

    const container = document.createElement("div");
    container.classList.add(inputClass, inputFileClass);

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const input = document.createElement("input");
    input.type = "file";

    container.append(input);

    const overrideUI = document.createElement("div");

    const fileName = document.createElement("span");
    fileName.innerText = "No file chosen";

    input.addEventListener("change", () => {
        const file = input.files[0];
        fileName.innerText = file?.name || "No file chosen";
    });

    const button = Button({
        iconRight: "File",
        text: "Select",
    });

    button.onclick = (e) => {
        e.preventDefault();
        input.click();
    };

    overrideUI.append(fileName, button);

    container.append(overrideUI);

    return {
        container,
        input,
    };
}
