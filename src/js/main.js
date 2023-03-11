import { Comment } from "./CommentsBlock/Comment.js";
import { createComment } from "./CommentsBlock/createComment.js";
import { removeValidationMessages } from "./helpers/removeValidationMessages.js";


const commentAuthorInput = document.getElementsByName("comment-author")[0];
const commentDateInput = document.getElementsByName("comment-date")[0];
const commentTextInput = document.getElementsByName("comment-text")[0];

commentAuthorInput.addEventListener('focus', clearValidation);
commentDateInput.addEventListener('focus', clearValidation);
commentTextInput.addEventListener('focus', clearValidation);

function clearValidation(e) {
    removeValidationMessages(e.target);
}

const sendCommentButton = document.getElementsByName("button-comment-submit")[0];
sendCommentButton.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    createComment(commentsBlock);
}

const firstComment = Comment('Иван Петров', '02.03.2022 08:42', 'Тестовый комментарий');
const commentsBlock = document.getElementsByClassName('comments')[0];
commentsBlock.appendChild(firstComment);