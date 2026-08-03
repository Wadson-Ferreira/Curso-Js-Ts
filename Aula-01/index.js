//Declaração de Função:
function falaOi() {
    console.log('Olá');
}
falaOi();

//First-class objects (Objetos de primeira classe)
//Function Expression
const souUmDado = function () {
    console.log('Sou um dado. ');
}

souUmDado();

function executaUmaFuncao(funcao) {
    console.log('Vou executa Uma Função');
    souUmDado();
}

executaUmaFuncao();

//Arrow functions 
const funcaoArrow = () => {
    console.log('Arrow function');
}

funcaoArrow();

//Dentro de um objeto

const obj = {
 /*    falar: function (){
        console.log('Estou falando....');
    } */

    falar(){
        console.log('Estou falando....');
    }
};

obj.falar();