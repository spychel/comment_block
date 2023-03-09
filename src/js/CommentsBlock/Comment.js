import { createElement } from "../helpers/createElement.js";


export const Comment = (creator, creatingDateTime, text) => {
    let result = createElement('div', ['comment']);
    let body = createElement('div', ['comment__body']);
    let header = createElement('div', ['comment__header']);
    let likeButton = createElement('div', ['comment__like']);
    let likeIcon = createElement('div', ['comment__like-icon']);
    let author = createElement('div', ['comment__user']);
    let dateTime = createElement('div', ['comment__datetime']);
    let content = createElement('div', ['comment__content']);
    let contentText = createElement('p', []);
    let remove = createElement('div', ['comment__remove']);
    let removeIcon = createElement('div', ['comment__remove-icon']);

    likeButton.onclick = (e) => {
        if (likeIcon.classList.contains('comment__like-icon_active')) {
            likeIcon.classList.remove('comment__like-icon_active');
        } else {
            likeIcon.classList.add('comment__like-icon_active');
        }
    }

    remove.onclick = (e) => {
        result.parentElement.removeChild(result);
    }

    result.append(body);

    body.append(header);

    header.append(likeButton);
    likeButton.title = 'Поставить лайк';
    likeButton.append(likeIcon);
    header.append(author);
    author.textContent = creator;
    header.append(dateTime);
    dateTime.textContent = creatingDateTime;
    header.append(remove);
    remove.title = 'Удалить комментарий';
    remove.append(removeIcon);

    body.append(content);
    content.append(contentText);
    contentText.textContent = text;


    return result;
}