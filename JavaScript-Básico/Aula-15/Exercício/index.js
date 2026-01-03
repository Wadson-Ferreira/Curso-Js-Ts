const numero = Number(prompt(`Digite um número: `));
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada é: ${Math.sqrt(numero)}</p>`;

texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p>arrendondando para cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML += `<p>arrendondando para baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
