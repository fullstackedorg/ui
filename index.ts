import { setIconsDirectory } from "./primitives/icon";

type Opts = {
    iconsDirectory?: string
}

export function initUI(opts?: Opts){
    setIconsDirectory(opts?.iconsDirectory || "/node_modules/@fullstacked/ui/icons")
}

export { Button } from "./primitives/button";
