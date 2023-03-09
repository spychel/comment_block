export function createElement(tagName, classes = []) {
    let element = document.createElement(tagName);
    if (classes != []) {
        [...classes].forEach(cls => element.classList.add(cls));
    }
    return element;
}