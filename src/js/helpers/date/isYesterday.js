import { getLastDayOfMonth } from "./getLastDayOfMonth.js";

const DECEMBER = 11;
const JANUARY = 0;
const FIRST_DAY_OF_JANUARY = 1;
const LAST_DAY_OF_DECEMBER = 31;

export function isYesterday(date) {
    let now = new Date();

    if (now.getFullYear() == date.getFullYear()) {
        if (now.getMonth() == date.getMonth()) {
            if (now.getDate() - 1 == date.getDate())
                return true;
        } else if (now.getMonth() - 1 == date.getMonth()) {
            if (getLastDayOfMonth(now.getFullYear(), now.getMonth() - 1) == date.getDate()) {
                return true;
            }
        }
    } else if (now.getFullYear() - 1 == date.getFullYear()) {
        if (now.getMonth() == JANUARY && date.getMonth() == DECEMBER) {
            if (now.getDate() == FIRST_DAY_OF_JANUARY && date.getDate() == LAST_DAY_OF_DECEMBER) {
                return true;
            }
        }
    }

    return false;
}