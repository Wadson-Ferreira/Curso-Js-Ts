const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

console.log(alunos[2]);//Imprime o elemento no índice 0

alunos[0] = 'Eduardo'; //Altera o elemento do indice 0 
alunos[3] = 'Luiza'; //Adiciona um elemento ao final
alunos[alunos.length] = 'Pedro'; //Adiciona um elemento ao final
alunos.push('Fábio'); //Adiciona um elemento ao final
alunos.unshift('Beatriz'); //Adiciona um elemento no indice 0

console.log(alunos);
console.log(alunos.length); //Mostra o tamanho do array

const removidoDoFinal = alunos.pop(); // Remove um elemento do final e salva em uma variável
console.log(removidoDoFinal);

const removidoDoInicio = alunos.shift(); // Remove um elemento do começo e salva em uma variável
console.log(removidoDoInicio);

console.log(alunos);

delete alunos[1]; // Deleta o valor do elemento do Índice 1
console.log(alunos);

console.log(alunos.slice(1, 3)); // Trouxe o elemento do índice 1 ao 2
console.log(alunos.slice(0, -1)); // Trouxe o elemento do Índice 0 ao Índice 3
console.log(alunos.slice(-3)); // Trouxe os 3 últimos elementos
