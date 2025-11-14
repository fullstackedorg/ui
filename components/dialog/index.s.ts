import style from "style";
import colors from "../../values/colors.s";
import spacing, { maxWidth } from "../../values/spacing.s";

export const dialogClass = "dialog";
export const dialogOverlayClass = style.createClass("dialog-overlay", {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: colors.overlay,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: `${spacing.l}px ${spacing.m}px`,
    overflow: "auto",
    zIndex: 10,

    [`.${dialogClass}`]: {
        backgroundColor: colors.blue.dark,
        width: "100%",
        maxWidth,
        padding: spacing.m,
        borderRadius: spacing.m,

        ".confirm": {
            p: {
                textAlign: "center",
                paddingBottom: spacing.m,
            },

            "> div:last-child": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            },
        },
    },
});
