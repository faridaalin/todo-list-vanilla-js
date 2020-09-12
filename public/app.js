const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");

let todos = {
  todoItems: [],
  completed: false,
};

const getinputValue = () => {
  if (input.value === "") {
    return;
  } else {
    todos.todoItems.push(input.value);
  }

  input.value = "";
};

const addTodo = (todos) => {
  if (todos.length > 0) {
    list.innerHTML = "";
    todos.map((item) => {
      list.innerHTML += `<li class="todo-item grid grid-cols-6 gap-4">
          <i class="completed ml-4 fa fa-check" aria-hidden="true"></i>
          <span class="ml-4">${item}</span>
          <i class="delete fa fa-trash" aria-hidden="true"></i>
      </li>`;
    });
  }
  return;
};

const deleteTodo = () => {
  const { todoItems } = todos;
  const todosList = document.querySelectorAll(".todo-item");
  const todosArray = Array.from(todosList);

  todosArray.forEach((todo, index) => {
    todo.addEventListener("click", (event) => {
      if (event.target.className.includes("delete")) {
        const { parentElement } = event.target;
        parentElement.remove();
        todoItems.splice(index, 1);
      }
    });
  });
};

const completeTodo = () => {
  const todosList = document.querySelectorAll(".todo-item");
  const todosArray = Array.from(todosList);

  todosArray.forEach((todo) => {
    todo.addEventListener("click", (event) => {
      if (event.target.className.includes("completed")) {
        const { parentElement } = event.target;
        parentElement.classList.toggle("finished");
      }
    });
  });
};

const createTodoList = () => {
  // Get value from input field
  getinputValue();

  // add todos to the list
  const { todoItems } = todos;
  addTodo(todoItems);

  // mark item todo as completed
  completeTodo(todoItems);

  // delete item todo
  deleteTodo();
};

button.addEventListener("click", createTodoList);
