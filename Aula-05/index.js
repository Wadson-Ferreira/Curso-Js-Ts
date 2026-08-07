function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Genesys');
const funcao2 = retornaFuncao('Wadson');
console.log(funcao());
console.log(funcao2());
