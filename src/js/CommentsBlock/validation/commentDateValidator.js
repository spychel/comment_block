import { addValidationMessage } from "../../helpers/addValidationMessage.js";
import { removeValidationMessages } from "../../helpers/removeValidationMessages.js";
import { futureDateValidator } from "../../helpers/validators/futureDateValidator.js";

export function commentDateValidator() {
    let commentDate = document.getElementsByName("comment-date")[0];
    removeValidationMessages(commentDate);

    let dateValidation = futureDateValidator(commentDate.value);
    if (dateValidation == null) {
        return true;
    }

    addValidationMessage(commentDate, dateValidation);

    return false;
}