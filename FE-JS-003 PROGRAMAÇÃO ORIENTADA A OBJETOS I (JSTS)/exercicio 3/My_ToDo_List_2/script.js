let id = 1

const todoForm = document.querySelector(".todo-form")
const todoInputTitle = document.querySelector(".todo-input-title")
const todoInputDate = document.querySelector(".todo-date")
const todoPriority = document.querySelector(".todo-option-priority")

function createTodo(text, date, priority) {
  const todo = document.createElement("li")
  todo.classList.add("todo")
  todo.id = id
  id++
  const todoTitle = document.createElement("p")
  const todoDate = document.createElement("span")
  const todopriority = document.createElement("span")
  todoTitle.innerText = text
  todoDate.innerText = date
  todopriority.innerText = priority

  const button_wrapper = document.createElement("div")
  button_wrapper.classList.add("button_wrapper")

  button_wrapper.appendChild(todoDate)
  button_wrapper.appendChild(todopriority)

  const btnDone = document.createElement("button")
  btnDone.classList.add("done")
  btnDone.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>'
  button_wrapper.appendChild(btnDone)

  const btnEdit = document.createElement("button")
  btnEdit.classList.add("edit")
  btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>'
  button_wrapper.appendChild(btnEdit)

  const btnRemove = document.createElement("button")
  btnRemove.classList.add("remove-todo")
  btnRemove.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  button_wrapper.appendChild(btnRemove)

  todo.appendChild(todoTitle)
  todo.appendChild(button_wrapper)

  const ulLemelnt = document.querySelector("ul")
  ulLemelnt.appendChild(todo)
}

function updateTodo() {}

function deleteTodo() {}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const todoInputTitleValue = todoInputTitle.value
  const todoInputDateValue = todoInputDate.value
  const todoPriorityValue = todoPriority.value

  console.log("todoInputTitleValue", todoInputTitleValue)
  console.log("todoInputDateValue", todoInputDateValue)
  console.log("todoPriorityValue", todoPriorityValue)

  if (todoInputTitleValue) {
    createTodo(todoInputTitleValue, todoInputDateValue, `Prioridade: ${todoPriorityValue}`)
  }
})

