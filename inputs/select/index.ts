import { Icon } from "../../ui";

export type InputSelectOpts = {
    label: string;
    placeholder: string;
};

export type InputSelectOption = {
    name: string;
    selected?: boolean;
    disabled?: boolean;
};

export function InputSelect(opts: Partial<InputSelectOpts>) {
    const container = document.createElement("div");
    container.classList.add("input-select");

    if (opts.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const selectAndIconContainer = document.createElement("div");
    selectAndIconContainer.classList.add("select-container");
    const select = document.createElement("select");
    const icon = document.createElement("div");
    icon.append(Icon("Arrow"));
    selectAndIconContainer.append(select, icon);
    container.append(selectAndIconContainer);

    const placeholderOption = document.createElement("option");
    placeholderOption.selected = true;
    placeholderOption.innerText = opts.placeholder || "Choose an option";
    select.append(placeholderOption);

    select.classList.add("invalid");

    const selectOptions: InputSelectOption[] = [];

    const addOptions = (option: InputSelectOption) => {
        selectOptions.push(option);
        const el = document.createElement("option");
        el.innerText = option.name;
        el.disabled = option.disabled;
        if (!el.disabled) {
            el.value = selectOptions.length.toString();
        }
        el.selected = option.selected;
        select.append(el);
    };

    select.onfocus = () => {
        placeholderOption.disabled = true;
    };
    select.onblur = () => {
        placeholderOption.disabled = false;
    };

    return {
        container,
        options: {
            get() {
                return selectOptions;
            },
            add(...options: InputSelectOption[]) {
                options.forEach(addOptions);
            },
            update(index: number, option: InputSelectOption) {},
            remove(index: number) {},
        },
    };
}
