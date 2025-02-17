export type InputOpts = {
    label: string;
};

export function InputText(opts?: Partial<InputOpts>) {
    const container = document.createElement("div");
    container.classList.add("input-text");

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const input = document.createElement("input");
    input.autocapitalize = "off";

    container.append(input);

    return {
        container,
        input
    };
}

