function Pessoa (nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function (){

    };
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Genesys', 'Wadson');
const p2 = new Pessoa('Rute', 'Lessa');

console.log(p1.nome);
p1.metodo();
