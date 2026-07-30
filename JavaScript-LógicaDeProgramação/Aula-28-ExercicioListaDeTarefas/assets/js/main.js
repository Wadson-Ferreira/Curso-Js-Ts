const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputNovaTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
  }
})

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
}

btnAddTarefa.addEventListener('click', function () {
  if (!inputNovaTarefa.value) return;
  criaTarefa(inputNovaTarefa.value);
})
