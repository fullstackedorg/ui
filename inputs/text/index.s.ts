import style from "style";

export const inputTextContainerClass = "input-container";
export const inputTextButtonContainerClass = "button-container";
export const inputTextButtonShowClass = "show";
export const inputTextClass = style.createClass("input-text", {
    [`.${inputTextContainerClass}`]: {
        width: "100%",
        position: "relative",
        [`> .${inputTextButtonContainerClass}`]: {
            position: "absolute",
            height: "100%",
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            right: 0,
            top: 0,
            padding: "1px 5px 0",
            [`&.${inputTextButtonShowClass}`]: {
                display: "flex",
            },
        },
    },
});
