const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColoBody = estilosBody.backgroundColor;
const corBranco = "#FFFFFF";

for (let p of ps){
    p.style.backgroundColor = backgroundColoBody;
    p.style.color = corBranco;
}
