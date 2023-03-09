import { createElement } from "../createElement.js";

export function textLengthValidator(text, min, max = 500) {
    if (text.length < min) {
        let errorElement = createElement('span', []);
        errorElement.textContent = `* Минимальная длина вводимых данных должна быть не менее ${min} сим.`;
        return errorElement;
    }
    if (text.length > max) {
        let errorElement = createElement('span', []);
        errorElement.textContent = `* Максимальная длина вводимых данных должна быть не более ${max} сим.`;
        return errorElement;
    }
    return null;
}