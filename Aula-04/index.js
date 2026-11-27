/* //Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor){
    /* if (valor > 10){
        return true;
    } else {
        return false;
    } 
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

const numerosFiltrados2 = numeros.filter( function(valor) { return valor > 10});
console.log(numerosFiltrados2);

const numerosFiltrados3 = numeros.filter ((valor) => {return valor > 10;});
console.log(numerosFiltrados3);

const numerosFiltrados4 = numeros.filter (valor => {return valor > 10;});
console.log(numerosFiltrados4);

const numerosFiltrados5 = numeros.filter (valor=>  valor>10);
console.log(numerosFiltrados5);

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log('--- Iniciando o filtro (valor > 10) ---\n');

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  const passou = valor > 10;
  
  console.log(`Índice [${indice}] | Valor: ${valor} | Passou? ${passou ? 'Sim' : 'Não'}`);
  
   console.log('Array:', array);

  return passou;
});

console.log('\n--- Resultado Final ---');
console.log(numerosFiltrados);
 */

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasCom5LetrasOuMais = pessoas.filter( obj => obj.nome.length >= 5);
console.log(pessoasCom5LetrasOuMais);

const pessoas50anosMais = pessoas.filter (obj => obj.idade > 50);
console.log(pessoas50anosMais);

const nomeTerminaComA = pessoas.filter (obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(nomeTerminaComA);


