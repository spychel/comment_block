import { removeAllChildren } from "./removeAllChildren.js";

export function removeValidationMessages(target) {
    let errorBlock = target.nextSibling;
    removeAllChildren(errorBlock);
}