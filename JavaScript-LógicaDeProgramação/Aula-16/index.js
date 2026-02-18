/* const frutas = ['Pera', 'Maça', 'Uva'];

 for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
} 

for (const i in frutas) {
    console.log(frutas[i]);
}*/

const pessoa = {
    nome: 'Genesys',
    sobrenome: 'Wadson',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave); //assim pegamos apenas as chaves sem os valores
}

for (const chave in pessoa) {
    console.log(chave, pessoa[chave]); //assim pegamos apenas as chaves com os valores
}