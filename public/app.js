const form = document.querySelector(".form");
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");

const dateContainer = document.querySelector(".date");

let todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addTodo(input.value);
});

const addTodo = (item) => {
  if (item !== "") {
    const todo = {
      name: item,
      completed: false,
    };

    todos.push(todo);
    addToLocalStorage(todos);
    input.value = "";
  }
};

const renderTodos = (todos) => {
  // clear items inside the <ul>
  list.innerHTML = "";

  // loop trough each todo
  todos.forEach((item) => {
    list.innerHTML += `<li class="todo-item ${
      item.completed === true ? "finished" : null
    } flex items-center w-full pr-4">
          <i class="completed ml-4 fa fa-check cursor-pointer" aria-hidden="true"></i>
          <span class="ml-4">${item.name}</span>
          <i class="delete ml-auto cursor-pointer fa fa-trash" aria-hidden="true"></i>
      </li>`;
  });
};

const addToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos(todos);
};

const getFromLocalStorage = () => {
  const localTodos = localStorage.getItem("todos");
  if (localTodos) {
    todos = JSON.parse(localTodos);
    renderTodos(todos);
  }
};

getFromLocalStorage();

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
