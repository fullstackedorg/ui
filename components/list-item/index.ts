type ListItemOpts = {
    content: HTMLElement | string;
    withProgress: boolean;
};

export function ListItem(
    opts: Partial<ListItemOpts> & { withProgress: true },
): {
    container: HTMLDivElement;
    setProgress: (progress: number) => void; // 0 - 1
};
export function ListItem(opts: Partial<ListItemOpts>): HTMLDivElement;
export function ListItem(opts: Partial<ListItemOpts>) {
    const container = document.createElement("div");
    container.classList.add("list-item");

    const inner = document.createElement("div");
    inner.classList.add("inner");
    container.append(inner);

    if (opts?.content) {
        inner.append(opts.content);
    }

    if (opts?.withProgress) {
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress");
        container.append(progressBar);

        const setProgress = (p: number) => {
            progressBar.style.width = p * 100 + "%";
        };
        return { container, setProgress };
    }

    return container;
}
