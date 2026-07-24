//Escreva uma função que recebe um número e retorne o seguinte:
//Número divisível por 3: Fizz
//Número divisível por 5: Buzz
//Número divisível por 3 e 5: FizzBuzz
//Número NÃO é divisível por 3 e por 5 = Retorna o próprio número
//Checar se o número é realmente um número
//Use a função com número de 0 a 100

function fizzBizz(num) {
    if (!Number.isFinite(num)){
        return `is not a number: ${num}`;
    } if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } if (num % 5 === 0) {
        return 'Buzz';
    } if (num % 3 === 0) {
        return 'Fizz'
    } else {
        return num;
    }
}

for (let i = 0; i <= 100; i++) {
  console.log(fizzBizz(i));
};

console.log(fizzBizz("String"));
