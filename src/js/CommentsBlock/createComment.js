import { dateProcessor } from "../helpers/date/dateProcessor.js";
import { Comment } from "./Comment.js";
import { validation } from "./validation/validation.js";

export function createComment(target) {
    if (validation()) {
        let author = document.getElementsByName("comment-author")[0].value;
        let processedDate = dateProcessor(document.getElementsByName("comment-date")[0].value);
        let commentDate = processedDate;
        let commentText = document.getElementsByName("comment-text")[0].value;
        let newComment = Comment(author, commentDate, commentText);
        target.appendChild(newComment);
    }
}