let nome = `Luiz`;
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; //Cópia
console.log(a);

a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);