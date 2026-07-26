/* try {
    console.log(NaoExissto);
} catch (err) {
    console.log(`Não existo`);
}
 */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisa ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log(error);
}
