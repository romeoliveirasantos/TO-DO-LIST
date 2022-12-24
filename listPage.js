const input = document.querySelector('.input');
const div = document.querySelector('.list-div')
const createDivtask = document.createElement('div');
const buttonCreateList = document.querySelector('.button-createList');

const validateInput = () => {
  return input.value.trim().length > 0;
}

const handleAddTask = () =>{
  const inputIsValid = validateInput();

  if(!inputIsValid) {
   input.placeholder = "Você precisa inserir algo neste campo.";
   return  input.classList.add("error");
  }
  input.placeholder = "Estudar programação - 40 minutos";
  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add("task")
  

  const taskText = document.createElement('p')
  taskText.innerText = input.value;
  input.value = "";
  

  const taskDivIcon = document.createElement('div');

  const completeItem = document.createElement("i")
  completeItem.classList.add("fa-solid")
  completeItem.classList.add("fa-check")
  completeItem.classList.add("completeIcon")

  completeItem.addEventListener('click',() => handleClick(taskText))

  const deleteItem = document.createElement("i")
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");
  deleteItem.classList.add("deleteIcon")

  deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer))

  taskItemContainer.appendChild(taskText);
  taskItemContainer.appendChild(taskDivIcon)
  taskDivIcon.appendChild(completeItem);
  taskDivIcon.appendChild(deleteItem);

  div.appendChild(taskItemContainer);
}
const handleClick = (taskText) => {
  taskText.style.textDecoration = "line-through"
  taskText.style.color = "green"
}
const handleDeleteClick = (taskItemContainer) => {
  taskItemContainer.remove()
}
const handleInputChange = () =>{
  const inputIsValid = validateInput();

  if(inputIsValid) {
    return input.classList.remove("error");
  }
  
}

buttonCreateList.addEventListener('click', () => handleAddTask())

input.addEventListener('change', () => handleInputChange())

