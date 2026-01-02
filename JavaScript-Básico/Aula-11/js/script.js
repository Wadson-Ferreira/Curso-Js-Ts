alert ('Com a nossa mensagem.');
//Retorna undefined pois não aponta para nenhum lugar na memória. 

confirm('Deseja realmente apagar?');
//Retorna false ou true

window.prompt('Digite o seu nome: ');
//Retorna uma string ou null(em caso de cancelar ou "esc")

const confirma = confirm('Realmente deseja apagar?');

if (confirma == true) {
    console.log('Apagado');
}