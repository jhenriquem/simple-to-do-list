document.getElementById('push').addEventListener('click', Task);

var nameTask = document.getElementById('newtask_input');

// Função responsavel por indentificar se a tarefa foi nomeada
function Task() {
  if (nameTask.value == '') {
    alert('Digite o nome da tarefa');
  } else {
    Creation();
  }
}
// Função responsavel por criar as tarefas
function Creation() {
  document.getElementById('tasks_grid').innerHTML += `
    <div class="task">
        <input class="check" type="checkbox"/>
        <span id="taskname">
            ${nameTask.value}
        </span>
        <button class="delete"> <img src="Imgs/delete.png"/> </button>
     
    </div>
    `;
  nameTask.value = '';
  cleanTask();
}

// Função responsavel por apagar as tarefas,
function cleanTask() {
  var current_tasks = document.querySelectorAll('.delete');
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}
