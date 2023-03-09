import { createElement } from "../createElement.js";

export function futureDateValidator(date) {
    if (new Date(date) > new Date()) {
        let errorElement = createElement('span', []);
        errorElement.textContent = `* Если вы из будущего, то передайте привет Алисе =)`;
        return errorElement;
    }
    return null;
}