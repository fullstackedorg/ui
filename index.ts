import * as UI from "./ui";
import fs from "fs";
import eruda from "eruda";
import { setIconsDirectory } from "./primitives/icon";
import { ListItem } from "./components/list-item";
eruda.init();

setIconsDirectory("/icons");

const iconsGrid = document.createElement("div");
iconsGrid.id = "icons";
document.body.append(iconsGrid);
const icons = (await fs.readdir("/icons")).map((i) => i.split(".").shift());
iconsGrid.append(...icons.map(UI.Icon));

const buttonsParams: Parameters<typeof UI.Button>[0][] = [
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
buttons.append(...buttonsParams.map(UI.Button));

document.body.append(
    UI.ButtonGroup([
        UI.Button(buttonsParams.at(0)),
        UI.Button(buttonsParams.at(3)),
    ]),
);

const badgesParams: Parameters<typeof UI.Badge>[0][] = [
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
badges.append(...badgesParams.map(UI.Badge));

const form = document.createElement("form");
document.body.append(form);

const predictions = ["some prediction", "npm install", "git log"];

const inputPredictive = UI.InputPredictive({
    label: "Input Predictive",
    onChange: (value) => {
        if (!value) return "";
        const prediction = predictions.find((p) => {
            return p.startsWith(value);
        });
        if (prediction) {
            return prediction.slice(value.length);
        }
        return "";
    },
});

const inputs = [
    inputPredictive,
    UI.InputText({
        label: "Input Text",
    }),
    UI.InputFile({
        label: "Input File",
    }),
    UI.InputSwitch({
        label: "Input Switch",
    }),
    UI.InputCheckbox(),
    UI.InputRadio(),
];

form.append(...inputs.map(({ container }) => container));
const resetButton = UI.Button({
    text: "Reset",
});
resetButton.onclick = (e) => {
    e.preventDefault();
    form.reset();
};
form.append(resetButton);

const dialogButton = UI.Button({
    text: "Open Dialog",
});
dialogButton.onclick = () => {
    const content = document.createElement("div");
    content.innerHTML = `<h1>Dialog</h1>`;
    const closeButton = UI.Button({
        text: "Close",
    });
    content.append(closeButton);
    closeButton.onclick = UI.Dialog(content).remove;
};
document.body.append(dialogButton);

const loaderContainer = document.createElement("div");
loaderContainer.id = "loader";
loaderContainer.append(UI.Loader());
document.body.append(loaderContainer);

const messagesParams: Parameters<typeof UI.Message>[0][] = [
    {
        text: "A message",
    },
    {
        text: "A warning message",
        style: "warning",
    },
];

const messagesContainer = document.createElement("div");
messagesContainer.id = "messages";
document.body.append(messagesContainer);
messagesContainer.append(...messagesParams.map(UI.Message));

const popoverButtons = [
    UI.Button({
        text: "Top Left",
    }),
    UI.Button({
        text: "Top Center",
    }),
    UI.Button({
        text: "Top Right",
    }),
    UI.Button({
        text: "Center Left",
    }),
    UI.Button({
        text: "Center Center",
    }),
    UI.Button({
        text: "Center Right",
    }),
    UI.Button({
        text: "Bottom Left",
    }),
    UI.Button({
        text: "Bottom Center",
    }),
    UI.Button({
        text: "Bottom Right",
    }),
];

const popoverContent = UI.ButtonGroup([
    UI.Button({
        text: "Button",
    }),
]);

const popoverParams: Parameters<typeof UI.Popover>[0][] = [
    {
        align: {
            y: "top",
            x: "left",
        },
        anchor: popoverButtons[0],
        content: popoverContent,
    },
    {
        align: {
            y: "top",
            x: "center",
        },
        anchor: popoverButtons[1],
        content: popoverContent,
    },
    {
        align: {
            y: "top",
            x: "right",
        },
        anchor: popoverButtons[2],
        content: popoverContent,
    },
    {
        align: {
            y: "center",
            x: "left",
        },
        anchor: popoverButtons[3],
        content: popoverContent,
    },
    {
        align: {
            y: "center",
            x: "center",
        },
        anchor: popoverButtons[4],
        content: popoverContent,
    },
    {
        align: {
            y: "center",
            x: "right",
        },
        anchor: popoverButtons[5],
        content: popoverContent,
    },
    {
        align: {
            y: "bottom",
            x: "left",
        },
        anchor: popoverButtons[6],
        content: popoverContent,
    },
    {
        align: {
            y: "bottom",
            x: "center",
        },
        anchor: popoverButtons[7],
        content: popoverContent,
    },
    {
        align: {
            y: "bottom",
            x: "right",
        },
        anchor: popoverButtons[8],
        content: popoverContent,
    },
];

const popoverButtonsContainer = document.createElement("div");
popoverButtonsContainer.id = "popover";
document.body.append(popoverButtonsContainer);
popoverButtonsContainer.append(
    ...popoverButtons.map((b, i) => {
        b.onclick = () => UI.Popover(popoverParams[i]);
        return b;
    }),
);

const itemWithProgress = ListItem({
    content: "List item with progress",
    withProgress: true,
});
const listItems = [
    ListItem({
        content: "Basic list item",
    }),
    itemWithProgress,
];

const list = document.createElement("div");
list.id = "list";
listItems.forEach((i) => {
    if (i instanceof HTMLElement) {
        list.append(i);
    } else {
        list.append(i.container);
    }
});
document.body.append(list);
itemWithProgress.setProgress(0.8);
