function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        get imc(){
            const indice = this.peso / (this.altura** 2);
            return indice.toFixed(2);
        },

        set nomeCompleto(valor){
         valor = valor.split(' ');
         this.nome = valor.shift();
         this.sobrenome = valor.join(' ');
        }
    };

}

const p1 = criaPessoa('Genesys', 'Wadson', 1.70, 100);
const p2 = criaPessoa('Luiz', 'Paulo', 1.50, 50);

console.log(p1.imc);
p1.nomeCompleto = 'Luiz Paulo Freitas'
console.log(p1.nomeCompleto);
console.log(p1.fala('Falando sobre JS'));


console.log(p2.imc);
p2.nomeCompleto = 'Genesys Wadson Ferreira'
console.log(p2.nomeCompleto);
console.log(p2.fala('Falando sobre JS'));

