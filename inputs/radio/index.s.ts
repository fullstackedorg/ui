import style, { CSSProperties } from "style";
import { hideInput } from "../index.s";
import colors from "../../values/colors.s";

const inputRadioSize = 18;

export const checkedClass = "checked";

export const commonRadioCheckboxStyle: CSSProperties = {
    input: hideInput,

    "> div": {
        height: inputRadioSize,
        width: inputRadioSize,
        borderRadius: "50%",
        backgroundColor: colors.light,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        cursor: "pointer",

        "> div": {
            height: inputRadioSize - 6,
            width: inputRadioSize - 6,
            borderRadius: "50%",
        },
    },

    [`&.${checkedClass}`]: {
        "> div > div": {
            backgroundColor: colors.blue.main,
        },
    },
};

export const inputRadioClass = style.createClass(
    "input-radio",
    commonRadioCheckboxStyle,
);
