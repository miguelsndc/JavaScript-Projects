const submitFormBtn = document.getElementById('submit-task')
const taskList = document.querySelector('.list-container')
const task = document.querySelector('.task')

const generateNewTask = (taskName) => {
  const newTask = document.createElement('div')
  newTask.className = "task"
  newTask.innerHTML = `
  <p class="task-name">${taskName}</p>
    <div class="buttons">  
      <button class="add-item-trigger"><i class="far fa-check-circle"></i></button>
      <button class="remove-item-trigger"><i class="far fa-times-circle"></i></button>
    </div>
  `
  const removeTaskBtn = newTask.querySelector('.remove-item-trigger')
  const concludeTaskBtn = newTask.querySelector('.add-item-trigger')

  removeTaskBtn.addEventListener('click', () => {
    taskList.removeChild(removeTaskBtn.closest('section > div'))
  })

  concludeTaskBtn.addEventListener('click', () => {
    const parent = concludeTaskBtn.closest('section > div')
    parent.classList.toggle('concluded')
  })

  return newTask
}

submitFormBtn.addEventListener('click', () => {
  const taskName = document.getElementById('task-name').value
  if (!taskName.trim()) {
    alert('Digite algo!')
  }
  else {
    const newTask = generateNewTask(taskName)
    taskList.append(newTask)
  }
})
