function saudacao(){
    console.log('Bom dia');
}
saudacao();

function saudacaoComUmNome(nome){
    return `Bom dia ${nome}!`;
}
const variavel = saudacaoComUmNome('Wadson');
console.log(variavel);

function soma(x,y){
    const resultado = x+y;
    return resultado;
}
console.log(soma(3,5))

const raiz = function(x){
    return x ** 0.5;
};
console.log(raiz(9));

const raiz2 = x => x ** 0.5;
console.log(raiz(16));