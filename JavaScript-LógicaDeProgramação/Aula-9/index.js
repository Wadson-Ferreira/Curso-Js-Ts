const date = new Date();
const dayWeek = date.getDay();

function getDayOfWeek(dayWeek) {
    let dayOfWeekString;

    switch (dayWeek) {
        case 0:
            dayOfWeekString = 'Domingo';
            return dayOfWeekString;
        case 1:
            dayOfWeekString = 'Segunda';
            return dayOfWeekString;
        case 2:
            dayOfWeekString = 'Terça';
            return dayOfWeekString;
        case 3:
            dayOfWeekString = 'Quarta';
            return dayOfWeekString;
        case 4:
            dayOfWeekString = 'Quinta';
            return dayOfWeekString;
        case 5:
            dayOfWeekString = 'Sexta';
            return dayOfWeekString;
        case 6:
            dayOfWeekString = 'Sábado';
            return dayOfWeekString;
        default: dayOfWeekString = 'Dia não válido';
            return dayOfWeekString;
    }
}

const dayOfWeek = getDayOfWeek(dayWeek);

console.log(dayOfWeek);
