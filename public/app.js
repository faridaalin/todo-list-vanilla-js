const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");

let todos = {
  todoItems: [],
  completed: false,
  delete: false,
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

const deleteTodo = (todos) => {
  const todoItem = document.querySelectorAll(".todo-item");

  const todosArray = Array.from(todoItem);
  todosArray.forEach((todo) => {
    todo.addEventListener("click", (event) => {
      if (event.target.className.includes("delete")) {
        const todoParent = event.target.parentElement;
        todoParent.remove();
        console.log(todos);
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

  // delete item todo
  deleteTodo(todoItems);
};

button.addEventListener("click", createTodoList);
