import { startObserverInterval } from "../observer";
import { Icon } from "../../ui";

export type InputSelectOpts = {
    label: string;
    placeholder: string;
};

export type InputSelectOption = {
    name: string;
    id?: string;
    selected?: boolean;
    disabled?: boolean;
};

export function InputSelect(opts: Partial<InputSelectOpts>) {
    startObserverInterval();

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

    const disablePlaceholder = () => {
        placeholderOption.disabled = true;
    };

    select.onfocus = disablePlaceholder;
    select.ontouchstart = disablePlaceholder;
    select.onclick = disablePlaceholder;
    select.onblur = () => {
        placeholderOption.disabled = false;
    };

    const indexOfIdOrName = (idOrName: string) => {
        return selectOptions.findIndex((item) => {
            if (item.id) {
                return item.id === idOrName;
            }
            return item.name === idOrName;
        });
    };

    let selectAPI = {
        get value() {
            const index = select.selectedIndex - 1;
            if (index === -1) {
                return undefined;
            }
            const item = selectOptions.at(index);
            return item.id || item.name;
        },
        set value(v: string) {
            const indexOf = indexOfIdOrName(v);
            if (indexOf === -1) return;
            select.selectedIndex = indexOf + 1;
        },
        onchange: (item?: string, index?: number): any => {
            return { item, index };
        },
    };

    select.onchange = () => {
        const index = select.selectedIndex - 1;
        const item = selectOptions.at(index);
        const value = item.id || item.name;
        selectAPI.value = value;
        selectAPI.onchange(value, index);
    };

    return {
        container,
        select: selectAPI,
        options: {
            get() {
                return selectOptions;
            },
            add(...options: InputSelectOption[]) {
                options.forEach(addOptions);
            },
            remove(nameOrId: string) {
                const indexOf = indexOfIdOrName(nameOrId);
                if (indexOf === -1) return;

                const selectedIndex = select.selectedIndex - 1;
                if (indexOf === selectedIndex) {
                    select.selectedIndex = 0;
                }

                selectOptions.splice(indexOf, 1);
            },
        },
    };
}
