/* 
This file must follow the figma design
https://www.figma.com/design/xb3JBRCvEWpbwGda03T5QQ/Mockups?node-id=101-1212
*/

import style from "style";
import colors, { opacity } from "../../values/colors.s";
import spacing from "../../values/spacing.s";
import { fontFamily } from "../../values/typography.s";

export const badgeStyles = [
    "success",
    "warning",
    "error",
    "info",
    "info-2",
] as const;

export const badgeClass = style.createClass("badge", {
    color: colors.light,
    backgroundColor: opacity(colors.gray.main, 50),
    borderRadius: spacing.xs,
    padding: `${spacing.xs}px ${spacing.s}px`,
    fontFamily,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    [`&.${badgeStyles[0]}`]: {
        backgroundColor: opacity(colors.green, 50),
    },
    [`&.${badgeStyles[1]}`]: {
        backgroundColor: opacity(colors.yellow, 50),
    },
    [`&.${badgeStyles[2]}`]: {
        backgroundColor: opacity(colors.red, 50),
    },
    [`&.${badgeStyles[3]}`]: {
        backgroundColor: opacity(colors.blue.accent, 50),
    },
    [`&.${badgeStyles[4]}`]: {
        backgroundColor: opacity(colors.blue.main, 50),
    },
});
