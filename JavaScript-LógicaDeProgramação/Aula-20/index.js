const numeros = [1,2,3,4,5,6,7,8,9];

/* for (let numero of numeros) {
    if (numero === 2 || numero === 5 ){
        console.log('Pulei o 2 ou o 5');
        continue;
    }
    console.log(numero);
} */

    for (let numero of numeros) {
        if (numero ===3){
            break;
        }
        console.log(numero);
    }

