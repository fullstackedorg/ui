import style, { CSSProperties } from "style";
import colors from "../../values/colors.s";
import spacing from "../../values/spacing.s";

const transparentButton: CSSProperties = {
    backgroundColor: "transparent"
};

export const buttonGroupClass = style.createClass("button-group", {
    display: "inline-flex",
    flexDirection: "column",
    backgroundColor: colors.dark,
    borderRadius: spacing.xs,
    overflow: "hidden",

    button: {
        ...transparentButton,
        borderRadius: 0,
        justifyContent: "flex-start",

        "&:not(:last-child)": {
            borderBottom: `1px solid ${colors.gray.main}`
        },

        "&.red": {
            color: colors.red,
            ...transparentButton
        },

        "&:active": {
            backgroundColor: colors.gray.dark
        }
    }
});
