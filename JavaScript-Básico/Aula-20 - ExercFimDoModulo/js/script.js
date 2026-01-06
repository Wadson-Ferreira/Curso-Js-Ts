/* function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log(`Foi enviado!`)
    };
} */

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

   function criarPessoas(nome, sobrenome, peso, altura) {
        return { nome, sobrenome, peso, altura };
    };

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const novaPessoa = criarPessoas(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(novaPessoa);

        enviarResultado();
    }

    function enviarResultado(){
        const ultimaPessoa = pessoas [pessoas.length -1];
        resultado.innerHTML += `<p>Pessoa criada: ${ultimaPessoa.nome} ${ultimaPessoa.sobrenome} (${ultimaPessoa.peso}kg, ${ultimaPessoa.altura}m)</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();