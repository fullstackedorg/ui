import style from "style";

// 1/1 ratio source : https://stackoverflow.com/a/6615994
export const loaderClass = style.createClass("loader", {
    width: "100%",
    display: "inline-block",
    position: "relative",
    "> div:first-child": {
        marginTop: "100%"
    },
    "> div:last-child": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        "> svg": {
            animation: `${style.createAnimation("spin", {
                to: {
                    transform: "rotate(1turn)"
                }
            })} 1s infinite linear`
        }
    }
});
