function funcao() {
    console.log('Oie');
    console.log(arguments);
    console.log(arguments[7]);
    
}

funcao('Valor');
funcao('Valor',1,23,43,21435,43652134,565463, 'indice 7');

function somar(a,b,c) {
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

somar(1,2,3,4,5,6,7,8,9);

function funcao2 (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}

funcao2(1,2,3);

function funcao3(a,b=0) {
  console.log(a+b);
} 
funcao3 (2);

function funcao4(a,b=0, c=4) {
  console.log(a+b+c);
} 
funcao4 (2, undefined, 20);

function funcaoObjeto({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Genesys', sobrenome: 'Wadson', idade: 30};

funcaoObjeto(obj)

function funcaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

let array =['Genesys', 'Wadson', 30];

funcaoArray(array)

function conta(operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 1,3,4,5,7);

const arrowFunction = (...args) => {console.log(args);
}

arrowFunction('+', 1,3,4,5,7)