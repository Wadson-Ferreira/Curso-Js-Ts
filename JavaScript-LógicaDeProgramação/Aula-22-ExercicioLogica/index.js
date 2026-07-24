//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retrone true se a imagem estiver no modo paisagem. (Modo paisagem é quando a imagem está deitada.)

function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920,1080));

//Outra forma
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1920,1080));



