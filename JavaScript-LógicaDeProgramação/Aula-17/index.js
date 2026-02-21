const nomes =['Genesys Wadson', 'Rute Lessa', 'Pedro Luiz', 'Luiz Otavio'];

/* //for clássico
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

//for in
for (let i in nome) {
    console.log(nome[i]);
} 

for (let valor of nomes) {
    console.log(valor);
}*/

//for each
nomes.forEach(function(valor, indece) {
    console.log(valor, indece);
})