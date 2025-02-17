import { setIconsDirectory } from "./primitives/icon";

type Opts = {
    iconsDirectory?: string;
};

export function initUI(opts?: Opts) {
    setIconsDirectory(
        opts?.iconsDirectory || "/node_modules/@fullstacked/ui/icons",
    );
}

export { Icon } from "./primitives/icon";
export { Button } from "./primitives/button";

export { InputText } from "./inputs/text";
export { InputFile } from "./inputs/file";
export { InputSwitch } from "./inputs/switch";
export { InputCheckbox } from "./inputs/checkbox";
export { InputRadio } from "./inputs/radio";

export { ButtonGroup } from "./components/button-group";
