type InputPredictiveOpts = {
    label: string;
    onChange: (value: string) => string[] | Promise<string[]>;
};

export const SPACE = String.fromCharCode(160);

export function InputPredictive(opts: Partial<InputPredictiveOpts>) {
    const container = document.createElement("div");
    container.classList.add("input-predictive");

    if (opts?.label) {
        container.innerHTML = `<label>${opts.label}</label>`;
    }

    const input = document.createElement("div");
    input.contentEditable = "true";
    input.autocapitalize = "off";
    input.setAttribute("autocomplete", "off");
    input.setAttribute("autocorrect", "off");

    let prediction: HTMLSpanElement = document.createElement("span");
    prediction.contentEditable = "false";
    input.append(prediction);

    const spaceRegex = new RegExp(SPACE, "g");

    let predictions: string[] = [];
    let predictionIndex = 0;

    const prevPrediction = () => {
        if (predictionIndex === 0) {
            return;
        }
        predictionIndex -= 1;
        prediction.innerText = predictions.at(predictionIndex);
    };

    const nextPrediction = () => {
        if (predictionIndex === predictions.length - 1) {
            return;
        }
        predictionIndex += 1;
        prediction.innerText = predictions.at(predictionIndex);
    };

    const predict = async () => {
        Array.from(input.children).forEach((child) => {
            if (child.innerHTML === "" || child instanceof HTMLBRElement) {
                child.remove();
            }
        });

        if (prediction.getBoundingClientRect().height == 0) {
            input.append(prediction);
        }

        let value = input.innerText.replace(spaceRegex, " ");

        const prevP = prediction.innerText;
        if (prevP) {
            value = value.slice(0, 0 - prevP.length);
        }

        const onChangeResult = opts?.onChange?.(value);

        if (onChangeResult instanceof Promise) {
            predictions = await onChangeResult
        } else {
            predictions = onChangeResult
        }

        if (predictions.length) {
            predictionIndex = 0;
            prediction.innerText = predictions.at(predictionIndex);
        } else {
            prediction.innerText = "";
        }
    };

    const replaceCursor = () => {
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(input.childNodes[0], input.innerText.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    const applyPrediction = () => {
        const p = prediction?.innerText || "";
        if (p) {
            prediction.innerText = "";
            input.innerText += p;
            replaceCursor();
        }
    };

    let isFocused = false;
    input.onclick = () => {
        if (isFocused) applyPrediction();
    };
    input.onpaste = () => {
        prediction.innerText = "";
        setTimeout(() => {
            input.innerText = input.innerText;
            predict();
        });
    };

    input.onblur = () => {
        isFocused = false;
        prediction.remove();
    };
    input.onfocus = () => {
        predict();

        let value = input.innerText;
        const prevP = prediction.innerText;
        if (prevP) {
            value = value.slice(0, 0 - prevP.length);
        }

        if (value) {
            setTimeout(replaceCursor);
        }
        setTimeout(() => (isFocused = true), 1000);
    };
    input.onkeyup = (e) => {
        const { key } = e;
        if (key === "ArrowUp" || key === "ArrowDown") {
            return;
        }
        predict();
    };

    input.onkeydown = (e: KeyboardEvent) => {
        const { key } = e;

        if (key === "ArrowUp" || key === "ArrowDown") {
            e.preventDefault();
            return key === "ArrowUp" ? prevPrediction() : nextPrediction();
        }

        const prevP = prediction.innerText;
        if (e.key === "Tab") {
            e.preventDefault();

            if (prediction.innerText != "") {
                applyPrediction();
            } else if (input.innerText && input.innerText.at(-1) !== SPACE) {
                input.innerText += SPACE;
                replaceCursor();
            }

        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            applyPrediction();
        } else if (prevP && key == prevP.at(0)) {
            prediction.innerText = prediction.innerText.slice(1);
        } else {
            prediction.innerText = "";
        }
    };

    container.append(input);

    return {
        container,
        input,
    };
}
