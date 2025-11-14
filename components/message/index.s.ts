import style from "style";
import colors from "../../values/colors.s";
import typography from "../../values/typography.s";
import spacing from "../../values/spacing.s";

export const messageStyles = ["warning"] as const;

export const messageClass = style.createClass("message", {
    display: "flex",
    gap: spacing.xs,
    fontSize: typography.s,

    [`&.${messageStyles[0]}`]: {
        color: colors.red
    },

    "> .icon": {
        color: "inherit",
        height: 16,
        width: 16
    }
});
