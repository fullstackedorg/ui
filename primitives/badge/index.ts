/* 
This file must follow the figma design
https://www.figma.com/design/xb3JBRCvEWpbwGda03T5QQ/Mockups?node-id=101-1212
*/

import { badgeClass, badgeStyles } from "./index.s";

type BadgeOpts = {
    text: string;
    type: (typeof badgeStyles)[number];
};

export function Badge(opts?: Partial<BadgeOpts>) {
    const container = document.createElement("label");
    container.classList.add(badgeClass);

    if (opts?.type) {
        container.classList.add(opts.type);
    }

    container.innerText = opts?.text || "";

    return container;
}
