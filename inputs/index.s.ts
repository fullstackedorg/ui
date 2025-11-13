import style, { CSSProperties } from "style";
import spacing from "../values/spacing.s";
import typography, { fontFamily } from "../values/typography.s";
import colors from "../values/colors.s";

export const hideInput: CSSProperties = {
    height: 0,
    width: 0,
    overflow: "hidden",
    padding: 0,
    margin: 0,
    position: "absolute",
    zIndex: -1,
    opacity: 0,
};

export const inputClass = style.createClass("input", {
    display: "inline-flex",
    flexDirection: "column",
    gap: spacing.xs,
    fontFamily,
    color: colors.light,
    width: "100%",

    "label > span": {
        fontWeight: "normal",
    },
});

const commonInputStyle: CSSProperties = {
    fontFamily,
    backgroundColor: colors.light,
    color: colors.dark,
    border: 0,
    borderRadius: spacing.xs,
    fontSize: typography.m,
    padding: 6,
    outlineOffset: 0,
    width: "100%",

    "&:focus": {
        outline: `2px solid ${colors.blue.main}`,
    },
};

style.createGlobalStyle({
    select: commonInputStyle,
    input: commonInputStyle,
    ".input-predictive > div": commonInputStyle,
});
