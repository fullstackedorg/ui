import style from "style";
import { hideInput } from "../index.s";
import spacing from "../../values/spacing.s";
import colors from "../../values/colors.s";

const handleSize = 22;
const outerSize = handleSize * 2 + 8;

export const checkedClass = "checked";
export const inputSwitchClass = style.createClass("input-switch", {
    input: hideInput,

    "> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",

        "> div": {
            height: spacing.l,
            width: outerSize,
            backgroundColor: colors.gray.main,
            padding: 4,
            borderRadius: outerSize / 2,
            transition: "0.2s background-color",
            cursor: "pointer",

            "> div": {
                height: handleSize,
                width: handleSize,
                backgroundColor: colors.light,
                borderRadius: handleSize / 2,
                marginLeft: 0,
                transition: "0.2s margin-left",
            },
        },
    },

    [`&.${checkedClass}`]: {
        "> div": {
            "> div": {
                backgroundColor: colors.blue.main,
                "> div": {
                    marginLeft: handleSize,
                },
            },
        },
    },
});
