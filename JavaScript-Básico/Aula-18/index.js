const pessoa1 = {
    nome: 'Genesys',
    sobrenome: 'Wadson',
    idade: 30,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criaPessoa('Rute', 'Lessa', 30);
console.log(pessoa2)