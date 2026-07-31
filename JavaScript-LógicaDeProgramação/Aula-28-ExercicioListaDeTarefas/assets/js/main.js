function listaDeTarefas() {
  const inputNovaTarefa = document.querySelector(".inputNovaTarefa");
  const btnAddTarefa = document.querySelector(".btnAddTarefa");
  const tarefas = document.querySelector(".tarefas");

  function criaLi() {
    const li = document.createElement("li");
    return li;
  }

  function limpaInput() {
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
  }

  function criaBtnApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar tarefa');
    li.appendChild(btnApagar);
  }

  function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }

  function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
  }

  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (const tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
  }

  inputNovaTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      if (!inputNovaTarefa.value) return;
      criaTarefa(inputNovaTarefa.value);
    }
  });

  btnAddTarefa.addEventListener("click", function () {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
  });

  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      salvarTarefas();
    }
  })

  adicionaTarefasSalvas();
}

