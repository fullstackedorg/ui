type InputPredictiveOpts = {
    label: string;
    onChange: (value: string) => string[];
};

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

    const spaceRegex = new RegExp(String.fromCharCode(160), "g");

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

    const predict = () => {
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

        predictions = opts?.onChange?.(value);
        if (predictions.length) {
            predictionIndex = 0;
            prediction.innerText = predictions.at(predictionIndex);
        } else {
            prediction.innerText = "";
        }
    };

    const applyPrediction = () => {
        const p = prediction?.innerText || "";
        if (p) {
            prediction.innerText = "";
            input.innerText += p + String.fromCharCode(160);
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(input.childNodes[0], input.innerText.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
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
            setTimeout(() => {
                const range = document.createRange();
                const sel = window.getSelection();
                range.setStart(input.childNodes[0], value.length);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            });
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
        if (e.key === "Tab" || e.key === "ArrowRight") {
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
