import style from "style";
import colors from "../../values/colors.s";

export const inputPredictiveClass = style.createClass("input-predictive", {
    "> div": {
        "> span": {
            color: colors.gray.main,
        },
    },
});
