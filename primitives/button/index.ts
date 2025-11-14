/* 
This file must follow the figma design
https://www.figma.com/design/xb3JBRCvEWpbwGda03T5QQ/Mockups?node-id=6-67
*/

import "./index.s";
import { Icon } from "../icon";
import { buttonStyles, buttonColors } from "./index.s";

type ButtonOpts = {
    iconLeft: string;
    iconRight: string;
    text: string;
    style: (typeof buttonStyles)[number];
    color: (typeof buttonColors)[number];
};

export function Button(opts?: Partial<ButtonOpts>) {
    const button = document.createElement("button");

    if (!opts?.style?.startsWith("icon")) {
        button.innerText = opts?.text || "";
    }

    if (opts?.style && opts?.style !== "default") {
        button.classList.add(opts.style);
    }

    if (opts?.color) {
        button.classList.add(opts.color);
    }

    if (opts?.iconLeft) {
        button.prepend(Icon(opts.iconLeft));
    }

    if (opts?.iconRight) {
        button.append(Icon(opts.iconRight));
    }

    return button;
}
