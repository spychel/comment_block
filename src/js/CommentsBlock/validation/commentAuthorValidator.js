import { addValidationMessage } from "../../helpers/addValidationMessage.js";
import { removeValidationMessages } from "../../helpers/removeValidationMessages.js";
import { textLengthValidator } from "../../helpers/validators/textLengthValidator.js";

export function commentAuthorValidator() {
    let author = document.getElementsByName("comment-author")[0];
    removeValidationMessages(author);

    let lengthValidation = textLengthValidator(author.value, 3, 50);
    if (lengthValidation == null) {
        return true;
    }

    addValidationMessage(author, lengthValidation);

    return false;
}