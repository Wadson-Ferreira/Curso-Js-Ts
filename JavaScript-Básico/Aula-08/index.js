/*Luiz Otávio MIranda tem 30 anos, pesa 84 kg, 
tem 1.80 de altura e seu IMC é de 25.925925925925924
*/

const nome = `Luiz Otávio`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
const hoje = new Date();
const anoAtual = hoje.getFullYear();
let imc; //peso / (altura * altura)
let anoNascimento;

indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassaCorporal}.
    Seu ano de nascimento é ${anoNascimento}.`)

