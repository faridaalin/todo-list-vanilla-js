const dateContainer = document.querySelector(".date");
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");

let todos = {
  todoItems: [],
};

const getinputValue = () => {
  if (input.value === "") {
    return;
  } else {
    todos.todoItems.push(input.value);
  }

  input.value = "";
};

const createList = (todos) => {
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

const deleteTodo = (todoItems) => {
  const todosList = document.querySelectorAll(".todo-item");
  const todosArray = Array.from(todosList);

  todosArray.forEach((todo, index) => {
    todo.addEventListener("click", (event) => {
      if (event.target.className.includes("delete")) {
        const { parentElement } = event.target;
        parentElement.remove();
        todoItems.splice(index, 1);
      } else if (event.target.className.includes("completed")) {
        const { parentElement } = event.target;
        parentElement.classList.toggle("finished");
      } else {
        return;
      }
    });
  });
};

const addTodo = () => {
  // Get value from input field
  getinputValue();

  // create a todo list t
  const { todoItems } = todos;
  createList(todoItems);

  // delete item todo
  deleteTodo(todoItems);
};

button.addEventListener("click", addTodo);
input.addEventListener(
  "keypress",
  (e) => (e.key === "Enter" || e.keyCode === 13) && addTodo()
);

// set date
const addDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let today = new Date();
  const date = today.getDate();
  const day = days[today.getDay()];
  const year = today.getFullYear();
  const month = months[today.getMonth()];

  dateContainer.innerText = `${day} ${date} ${month} ${year}`;
};

addDate();
