import style from "style";
import { commonRadioCheckboxStyle } from "../radio/index.s";
import spacing from "../../values/spacing.s";

export const inputCheckboxClass = style.createClass("input-checkbox", {
    ...commonRadioCheckboxStyle,
    "> div": {
        ...commonRadioCheckboxStyle["> div"],
        borderRadius: spacing.xs,
        "> div": {
            ...commonRadioCheckboxStyle["> div"]["> div"],
            borderRadius: 3,
        },
    },
});
