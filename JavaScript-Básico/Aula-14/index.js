let num1 = 1500.1239812391784; //number
let num2 = 2.5; //number

console.log(num1+num2); //soma os números
console.log(num1.toString()+num2); //Transforma o num1 em uma string temporariamente
console.log(typeof num1);

console.log(num1.toString(2));

console.log(num1.toFixed(2)); //Exibi apenas 2 casas deciamais

console.log(Number.isInteger(num1)); //Verifica se a variável é um integer

let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp)); //Verifica se a variável é um Number

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4);

num3 += num4;
num3 += num4;
num3 += num4;
console.log(num3);

num3 = Number(num3.toFixed(2));
console.log(num3);
