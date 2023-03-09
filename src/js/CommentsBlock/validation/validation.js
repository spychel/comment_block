import { commentAuthorValidator } from './commentAuthorValidator.js';
import { commentDateValidator } from './commentDateValidator.js';
import { commentTextValidator } from './commentTextValidator.js';

export function validation() {
    let validators = [
        commentAuthorValidator,
        commentDateValidator,
        commentTextValidator,
    ];

    let result = true;

    validators.forEach(validator => {
        if (validator() == false) {
            result = false;
        }
    });

    return result;
}