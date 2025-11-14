import style, { CSSProperties } from "style";
import colors from "./values/colors.s";
import typography, { fontFamily } from "./values/typography.s";

const marginZero: CSSProperties = {
    margin: 0,
};

const htmlBodyStyle: CSSProperties = {
    color: colors.light,
    fontFamily,
    ...marginZero,
    fontSize: typography.m,
};

style.createGlobalStyle({
    "*": {
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased",
    },
    html: htmlBodyStyle,
    body: htmlBodyStyle,
    h1: {
        ...marginZero,
        fontSize: typography.h1,
    },
    h2: {
        ...marginZero,
        fontSize: typography.h2,
    },
    h3: {
        ...marginZero,
        fontSize: typography.h3,
    },
    h4: marginZero,
    h5: marginZero,
    h6: marginZero,
    p: marginZero,
    pre: marginZero,
    label: {
        fontSize: typography.s,
        fontWeight: "bold",
    },
    small: {
        fontSize: typography.s,
    },
    ".font-x-small": {
        fontSize: typography.xs,
    },
    a: {
        color: "inherit",
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
            opacity: 0.7,
        },
    },
});
