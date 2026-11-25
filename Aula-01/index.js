/* const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
 
const nomes = new Array ('Eduardo', 'Maria', 'Joana');
const novo = nomes;

novo.pop();
console.log(nomes);

const nomes = new Array ('Eduardo', 'Maria', 'Joana', 'Matheus', 'Pedro');
const novo = [...nomes];

const remmoveUltimo = novo.pop();
const removePrimeiro = novo.shift();

const usoDoSlice = nomes.slice(1, 3);

novo.push('Adicionado no ultimo indice');
novo.unshift('Adiciona no indice 0');

console.log(nomes.length);
console.log(nomes);
console.log(novo);
console.log(remmoveUltimo);
console.log(removePrimeiro);
console.log(usoDoSlice);
*/

const nome = 'Genesys Wadson Ferreira Rocha';
const nomes = nome.split(' ');
console.log(nomes);

const nome2 = 'Genesys.Wadson.Ferreira.Rocha';
const nomes2 = nome2.split('.');
console.log(nomes2);

const nome3 = nomes.join(' ');
console.log(nome3);


