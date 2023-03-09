export function addValidationMessage(target, msg) {
    let errorBlock = target.nextSibling;
    errorBlock.appendChild(msg);
}