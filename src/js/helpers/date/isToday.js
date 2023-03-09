export function isToday(date) {
    let now = new Date();
    if (now.getFullYear() == date.getFullYear())
        if (now.getMonth() == date.getMonth())
            if (now.getDate() == date.getDate())
                return true;

    return false;
}