import { initUI, Button } from ".";

initUI({
    iconsDirectory: "/icons",
});

document.body.append(
    Button({
        text: "Button",
        iconLeft: "Close",
    }),
);
