const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

/* const removidos = nomes.splice(3, 2);
console.log(nomes);
console.log(removidos); */

/* const removidos = nomes.splice(-4, 2);
console.log(nomes);
console.log(removidos);
 */

const removidos = nomes.splice(1, 0, 'Genesys', 'Wadson');
console.log(nomes);
console.log(removidos);