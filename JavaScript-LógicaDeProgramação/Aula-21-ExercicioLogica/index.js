//Escreva uma função que recebe 2 números e retorna o maior

function returnBigger(numA, numB) {
  const bigger = Math.max(numA, numB);
  return bigger;
}

function randomNum() {
  const randomNum = Math.random() * 100 + 1;
  return Math.floor(randomNum);
}

const randNum1 = randomNum();
const randNum2 = randomNum();

const bigger = returnBigger(randNum1, randNum2);

console.log(
  `Esse é o que fiz originalmente: O primeiro número gerado é ${randNum1}. O segundo número gerado é ${randNum2}. O maior entre eles é ${bigger}`,
);

// Outra forma de fazer:

function max(x, y) {
  return x > y ? x : y;
}

const bigger2 =max(randNum1, randNum2);

console.log(
  `Function: O primeiro número gerado é ${randNum1}. O segundo número gerado é ${randNum2}. O maior entre eles é ${bigger2}`,
);

// Outra forma de fazer:

const max2 = (x, y) => {
  return x > y ? x : y;
};

const bigger3 =max2(randNum1, randNum2);

console.log(
  `Arrow Funciton: O primeiro número gerado é ${randNum1}. O segundo número gerado é ${randNum2}. O maior entre eles é ${bigger3}`,
);

// Outra forma de fazer:

const max3 = (x, y) => x > y ? x : y;

const bigger4 =max3(randNum1,randNum2);

console.log(
  `Arrow Funciton2: O primeiro número gerado é ${randNum1}. O segundo número gerado é ${randNum2}. O maior entre eles é ${bigger4}`,
);
