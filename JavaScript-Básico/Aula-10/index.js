/*
Aritméticos:
+ Adição e Concatenação
- substração 
* multiplicação 
** potenciação
% resto da divisão

++ incremento
--decremento
*/

const num1 = 10;
const num2 = 2;
const num3 = 15;
const texto = 'concatenação';
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + texto);
console.log((num1+num3) * num2);

let contadorIncremento = 5;
let contadorDecremento = 10;
console.log(++contadorIncremento);
console.log(contadorIncremento++);
console.log(contadorIncremento);

console.log(--contadorDecremento);
console.log(contadorDecremento--);
console.log(contadorDecremento);


const passo = 50;
let contador = 0;
contador = contador + passo;

console.log(contador);

let contador2 = 0;
contador2 += 50;
console.log(contador2);
