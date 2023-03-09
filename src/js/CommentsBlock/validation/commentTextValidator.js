import { addValidationMessage } from "../../helpers/addValidationMessage.js";
import { removeValidationMessages } from "../../helpers/removeValidationMessages.js";
import { textLengthValidator } from "../../helpers/validators/textLengthValidator.js";

export function commentTextValidator() {
    let commentText = document.getElementsByName("comment-text")[0];
    removeValidationMessages(commentText);

    let lengthValidation = textLengthValidator(commentText.value, 3);
    if (lengthValidation == null) {
        return true;
    }

    addValidationMessage(commentText, lengthValidation);

    return false;
}