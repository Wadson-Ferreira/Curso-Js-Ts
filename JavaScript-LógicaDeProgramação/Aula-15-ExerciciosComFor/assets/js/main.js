/* const dataArray = [
    { tag: 'p', text: 'Frase 1' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'footer', text: 'Frase 3' },
    { tag: 'section', text: 'Frase 4' },
]; */
function dataArray() {
    const dataArray = [
    { tag: 'p', text: 'Frase 1' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'footer', text: 'Frase 3' },
    { tag: 'section', text: 'Frase 4' },
]; 
    return dataArray;
}

function makeElement(tag) {
    const newElement = document.createElement(tag);
    return newElement;
}

function makeText(text) {
    const newText = document.createTextNode(text);
    return newText;
}

function creatElementAndContent(tag, text) {
   const element = makeElement(tag);
   const textNode = makeText(text);
   element.appendChild(textNode);
   return element;
}

function renderToDom(selector, element) {
    const target = document.querySelector(selector);
    if (target) {
        target.appendChild(element);
    } else {
        console.warn(`Atenção: O seletor "${selector}" não foi encontrado no DOM.`);
    }
}

function buildPage(selector) {
    const objectElements = dataArray();
    for (let i = 0; i < objectElements.length; i++) {
        const element = objectElements[i].tag;
        const text = objectElements[i].text;
        const completeElement = creatElementAndContent(element,text);
        renderToDom(selector,completeElement);
    }
}

function init() {
    const selector = '.container';
    buildPage(selector);
}

init();