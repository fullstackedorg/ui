import style, { CSSProperties } from "style";
import colors from "./values/colors.s";
import spacing from "./values/spacing.s";

const htmlbodyStyle: CSSProperties = {
    backgroundColor: colors.blue.dark
};

style.createGlobalStyle({
    html: htmlbodyStyle,
    body: htmlbodyStyle
});

export const iconsClass = style.createClass("icons", {
    display: "grid",
    width: 4 * 24 + 3 * spacing.s,
    gridTemplateColumns: `repeat(4, 1fr)`,
    gap: spacing.s,
    color: colors.light
});

export const buttonsClass = style.createClass("buttons", {
    display: "flex",
    gap: spacing.s,
    alignItems: "center"
});

export const badgesClass = style.createClass("badges", {
    display: "flex",
    gap: spacing.s
});

style.createGlobalStyle({
    form: {
        display: "flex",
        width: "100%",
        maxWidth: 300,
        flexDirection: "column",
        gap: spacing.s,
        button: {
            alignSelf: "flex-end"
        }
    }
});

export const loaderClass = style.createClass("loader-wrap", {
    height: 24,
    width: 24
});

export const popoverClass = style.createClass("popover-wrap", {
    width: "100%",
    maxWidth: 500,
    display: "grid",
    gap: spacing.m,
    gridTemplateColumns: `repeat(3, 1fr)`
});

export const listClass = style.createClass("list-wrap", {
    padding: `${spacing.m}px 0`,
    display: "flex",
    flexDirection: "column",
    gap: spacing.s,
    maxWidth: 400
});
