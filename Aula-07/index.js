(function () {
  const sobrenome = "Wadson";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Genesys'));
  }

  falaNome();
})();

const escopoGlobal = "Global";

console.log(escopoGlobal);
