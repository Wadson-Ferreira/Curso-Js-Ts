console.log(true && true); // True pois todas as expressões são verdadeiras
console.log(false && false); // False pois todas as expressões são falsas
console.log(false && true); // False pois pelo menos 1 expressão é falsas

console.log(true || false); //True pois pelos menos 1 expressão é verdadeira
console.log(true || true);//True pois pelos menos 1 expressão é verdadeira
console.log(false || false); //False pois ambas as expressões são falsas

console.log(true && !true); // false pois o operador de ! inverte uma expressão, que nesse caso é o true, o tornando false.

console.log(!true); //Confirmando que transformou o !true em false