import style from "style";
import colors from "../../values/colors.s";
import spacing from "../../values/spacing.s";
import typography from "../../values/typography.s";

export const selectContainerClass = "select-container";
export const invalidClass = "invalid";
export const inputSelectClass = style.createClass("input-select", {
    [`.${selectContainerClass}`]: {
        position: "relative",
        width: "100%",
        "> div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: 3,
            right: 3,
            height: 24,
            width: 24,
            position: "absolute",
            backgroundColor: colors.blue.main,
            borderRadius: spacing.xs,
            ".icon": {
                height: 16,
                width: 16,
                transform: "rotate(-90deg)",
            },
        },
        "> select": {
            appearance: "none",
            cursor: "pointer",
            width: "100%",
            height: 30,
            fontSize: typography.s,
            boxShadow: "none",
            color: colors.dark,
            [`&.${invalidClass}`]: {
                color: colors.gray.main,
            },
        },
    },
});
