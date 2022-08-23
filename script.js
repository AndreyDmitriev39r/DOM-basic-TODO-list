// constants

const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');

// console.log(addTaskcontainer, inputTask, addTask);

// functions

const addNewTask = () => {
  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);
  
  let checkButton = document.createElement('button');
  checkButton.innerHTML
    = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add('checkTask');
  task.appendChild(checkButton);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML
    = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add('deleteTask');
  task.appendChild(deleteButton);

  if (inputTask.value === '') {
    alert('Hey, write something!');
  }
  else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";
}

// event listeners

addTask.addEventListener('click', addNewTask);