import style from "style";
import colors from "../../values/colors.s";
import spacing from "../../values/spacing.s";

export const listItemInnerClass = "inner";
export const listItemProgressClass = "progress";
export const listItemClass = style.createClass("list-item", {
    backgroundColor: colors.gray.dark,
    border: `1px solid ${colors.gray.main}`,
    borderRadius: spacing.xs,
    overflow: "hidden",

    [`> .${listItemInnerClass}`]: {
        padding: spacing.s
    },
    [`> .${listItemProgressClass}`]: {
        height: spacing.xs,
        backgroundColor: colors.blue.main,
        width: 0,
        marginTop: 0 - spacing.xs
    }
});
