console.log('Luiz Otávio' && 0 && 'Maria'); // Nesse caso ele retorna o primeiro valor false que ele encontrou. Que nesse caso é 0

console.log('Luiz Otávio' && true && 'Maria'); // Nesse caso ele retornar Maria pois foi a ultima que foi checada e ele constadou que é verdadeiro;

console.log('Luiz Otávio' && true && NaN); // Nesse caso ele retorna NaN pois foi a última expressão checada, sendo nesse caso um false

console.log('Luiz' && 'Maria'); //Após checar até o último valor se a expressão é verdadeira, ele retorna o último valor. 

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz Otávio' || true); // Nesse caso ele vai retornar a strings preenchida pois foi o primeiro valor verdadeiro que o OR encontrou

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); //Nesse caso a cor que vai ser mostrada no log é preto, pois a cor do usuario esta em null, tornando assim a string 'preto' o primeiro item true que o OR encontrou



