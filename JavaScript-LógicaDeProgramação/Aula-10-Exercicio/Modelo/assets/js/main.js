function formatDate(date, locale = 'pt-BR') {
    const option = {
        dateStyle: 'full',
        timeStyle: 'short'
    };
    return date.toLocaleString(locale, option);
}

function updateElementContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = content;
    }
}

function init(){
    const now = new Date();
    const formattedDate = formatDate(now);

    updateElementContent('.container h1', formattedDate);
}

init()