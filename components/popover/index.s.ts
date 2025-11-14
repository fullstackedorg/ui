import style from "style";
import spacing from "../../values/spacing.s";

export const posX = {
    center: "center-x",
    left: "left",
    right: "right"
} as const;
export const posY = {
    center: "center-y",
    top: "top",
    bottom: "bottom"
} as const;

export const popoverClass = style.createClass("popover", {
    position: "absolute",
    zIndex: 11,
    padding: spacing.xs,

    [`&.${posX.center}`]: {
        transform: `translateX(-50%)`
    },
    [`&.${posX.center}.${posY.center}`]: {
        transform: `translate(-50%, -50%)`
    },
    [`&.${posX.center}.${posY.bottom}`]: {
        transform: `translate(-50%, -100%)`
    },

    [`&.${posX.right}`]: {
        transform: `translateX(-100%)`
    },
    [`&.${posX.right}.${posY.center}`]: {
        transform: `translate(-100%, -50%)`
    },
    [`&.${posX.right}.${posY.bottom}`]: {
        transform: `translate(-100%, -100%)`
    },

    [`&.${posY.center}`]: {
        transform: `translateY(-50%)`
    },

    [`&.${posY.bottom}`]: {
        transform: `translateY(-100%)`
    }
});

export const popoverOverlayClass = style.createClass("popover-overlay", {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10
});
