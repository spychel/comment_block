import { isToday } from "./isToday.js";
import { isYesterday } from "./isYesterday.js";

export function dateProcessor(dateText) {

    const dateFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const timeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
    };

    const time = new Date().toLocaleString('ru-Ru', timeFormatOptions);

    if (dateText && dateText !== '') {
        let date = new Date(dateText);
        if (isToday(date)) {
            return `сегодня, ${time}`;
        } else if (isYesterday(date)) {
            return `вчера, ${time}`;
        } else {


            return `${date.toLocaleDateString('ru-Ru', dateFormatOptions)} ${time}`;
        }
    }

    return `сегодня, ${time}`;
}