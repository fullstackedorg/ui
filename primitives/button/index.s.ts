/* 
This file must follow the figma design
https://www.figma.com/design/xb3JBRCvEWpbwGda03T5QQ/Mockups?node-id=6-67
*/
import style, { CSSProperties } from "style";
import typography, { fontFamily } from "../../values/typography.s";
import spacing from "../../values/spacing.s";
import colors, { opacity } from "../../values/colors.s";

export const buttonColors = ["red"] as const;
export const buttonStyles = [
    "default",
    "text",
    "icon-small",
    "icon-large",
] as const;

const textIconStyle: CSSProperties = {
    backgroundColor: "transparent",
    color: colors.blue.main,

    "&:active": {
        backgroundColor: colors.gray.dark,
    },

    "&:disabled": {
        color: colors.gray.main,
        backgroundColor: "transparent",
    },
    [`&.${buttonColors[0]}`]: {
        color: colors.red,
    },
};

const iconStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
};

style.createGlobalStyle({
    button: {
        fontWeight: "bold",
        fontSize: typography.m,
        fontFamily,

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.xs,

        padding: `7px ${spacing.s}px`,
        borderRadius: spacing.xs,
        backgroundColor: colors.blue.main,
        color: colors.light,
        border: 0,

        cursor: "pointer",

        ".icon": {
            height: 20,
            width: 20,
        },

        "&:active": {
            backgroundColor: "#0055b3",
        },

        [`&.${buttonColors[0]}`]: {
            backgroundColor: colors.red,

            "&:active": {
                backgroundColor: "#DB0C00",
            },
        },

        "&:disabled": {
            backgroundColor: colors.gray.main,
            color: opacity(colors.light, 70),
            cursor: "default",
        },

        [`&.${buttonStyles[1]}`]: textIconStyle,
        [`&.${buttonStyles[2]}`]: {
            ...textIconStyle,
            ...iconStyle,
            height: 24,
            width: 24,

            ".icon": {
                height: 20,
                width: 20,
            },
        },
        [`&.${buttonStyles[3]}`]: {
            ...textIconStyle,
            ...iconStyle,
            height: 38,
            width: 38,

            ".icon": {
                height: 30,
                width: 30,
            },
        },
    },
});
