// Selecção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue

// Funções
const saveTodo = (text) => {
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo")
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo")
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("remove-todo")
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)
  todoInput.value = ""
}

const toggleForms = () => {
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}

const updateTodo = (NewInputValue) => {
  const todos = document.querySelectorAll(".todo")

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3")
    
    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = NewInputValue
    }
  })
}

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputValue = todoInput.value
  if (inputValue) {
    saveTodo(inputValue)
  }
})

document.addEventListener("click", (e) => {
  const targetElement = e.target
  const parentElement = targetElement.closest("div")
  let todoTitle

  if (parentElement && parentElement.querySelector("h3")) {
    todoTitle = parentElement.querySelector("h3").innerText
  }

  switch (targetElement.classList.value) {
    case "finish-todo":
      {
        console.log("finish-todo")
        parentElement.classList.toggle("done")
      }
      break

    case "edit-todo":
      toggleForms()

      editInput.value = todoTitle
      oldInputValue = todoTitle
      break

    case "remove-todo":
      {
        parentElement.remove()
      }
      break
  }
})

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault()
  toggleForms()
})

editForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const editInputValue = editInput.value

  if (editInputValue) {
    updateTodo(editInputValue)
  }

  toggleForms()
})
