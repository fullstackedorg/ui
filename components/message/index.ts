import { Icon } from "../../primitives/icon";
import { messageClass, messageStyles } from "./index.s";

type MessageOpts = {
    text: string;
    style: (typeof messageStyles)[number];
};

export function Message(opts: Partial<MessageOpts>) {
    const container = document.createElement("div");
    container.classList.add(messageClass);

    if (opts.style) {
        container.classList.add(opts.style);
    }

    const iconName = opts.style === "warning" ? "Warning" : "Info";

    const icon = Icon(iconName);

    const text = document.createElement("b");
    text.innerText = opts.text;

    container.append(icon, text);

    return container;
}
