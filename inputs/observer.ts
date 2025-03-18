// input observer
const updateOverriddenInputs = () => {
    const inputsChecked = document.querySelectorAll<HTMLInputElement>(
        "input[type=checkbox], input[type=radio]",
    );
    inputsChecked.forEach((input) => {
        const parent = input.parentElement;
        if (input.checked) parent.classList.add("checked");
        else parent.classList.remove("checked");
    });

    const inputsFile =
        document.querySelectorAll<HTMLInputElement>("input[type=file]");
    inputsFile.forEach((inputFile) => {
        const file = inputFile.files[0];
        const fileName = inputFile.nextElementSibling
            ?.children?.[0] as HTMLSpanElement;
        if (!fileName) return;
        fileName.innerText = file?.name || "No file chosen";
    });

    const inputsSelect = document.querySelectorAll<HTMLSelectElement>("select");
    inputsSelect.forEach((inputSelect) => {
        if (inputSelect.selectedIndex) {
            inputSelect.classList.remove("invalid");
        } else {
            inputSelect.classList.add("invalid");
        }
    });
};

let interval: ReturnType<typeof setInterval> = null;
export function startObserverInterval() {
    if (interval) return;
    interval = setInterval(updateOverriddenInputs, 100);
}
