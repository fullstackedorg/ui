import style from "style";
import { hideInput } from "../index.s";
import spacing from "../../values/spacing.s";

export const inputFileClass = style.createClass("input-file", {
    input: hideInput,

    "> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.s,
    },
});
