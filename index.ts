import {
    initUI,
    Icon,
    Button,
    ButtonGroup,
    InputText,
    InputFile,
    InputCheckbox,
    InputSwitch,
    InputRadio,
} from "./ui";
import fs from "fs";
import eruda from "eruda";
import { Badge } from "./primitives/badge";
eruda.init();

initUI({
    iconsDirectory: "/icons",
});

const iconsGrid = document.createElement("div");
iconsGrid.id = "icons";
document.body.append(iconsGrid);
const icons = (await fs.readdir("/icons")).map((i) => i.split(".").shift());
iconsGrid.append(...icons.map(Icon));

const buttonsParams: Parameters<typeof Button>[0][] = [
    {
        text: "Button",
    },
    {
        text: "Button",
        style: "text",
    },
    {
        text: "Button",
        iconRight: "Settings",
    },
    {
        text: "Button",
        iconLeft: "Trash",
        color: "red",
    },
    {
        text: "Button",
        style: "text",
        color: "red",
    },
    {
        style: "icon-large",
        iconRight: "Play",
    },
    {
        style: "icon-small",
        iconRight: "Trash",
        color: "red",
    },
];

const buttons = document.createElement("div");
buttons.id = "buttons";
document.body.append(buttons);
buttons.append(...buttonsParams.map(Button));

document.body.append(
    ButtonGroup([Button(buttonsParams.at(0)), Button(buttonsParams.at(3))]),
);

const badgesParams: Parameters<typeof Badge>[0][] = [
    {
        text: "Badge",
    },
    {
        text: "Badge",
        type: "success",
    },
    {
        text: "Badge",
        type: "warning",
    },
    {
        text: "Badge",
        type: "error",
    },
    {
        text: "Badge",
        type: "info",
    },
    {
        text: "Badge",
        type: "info-2",
    },
];

const badges = document.createElement("div");
badges.id = "badges";
document.body.append(badges);
badges.append(...badgesParams.map(Badge));

const form = document.createElement("form");
document.body.append(form);

const inputs = [
    InputText({
        label: "Input Text",
    }),
    InputFile({
        label: "Input File",
    }),
    InputSwitch({
        label: "Input Switch",
    }),
    InputCheckbox(),
    InputRadio(),
];

form.append(...inputs.map(({ container }) => container));
const resetButton = Button({
    text: "Reset",
});
resetButton.onclick = (e) => {
    e.preventDefault();
    form.reset();
};
form.append(resetButton);
