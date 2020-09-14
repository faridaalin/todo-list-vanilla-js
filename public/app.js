const dateContainer = document.querySelector(".date");
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");

let todoItems = [];

const getinputValue = () => {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    return;
  } else {
    todoItems.push({ item: inputValue, completed: false });
  }

  input.value = "";
};

const addTodo = (todos) => {
  if (todos.length > 0) {
    list.innerHTML = "";
    todos.map((item) => {
      list.innerHTML += `<li class="todo-item ${
        item.completed === true ? "finished" : ""
      } flex items-center w-full pr-4">
          <i class="completed ml-4 fa fa-check cursor-pointer" aria-hidden="true"></i>
          <span class="ml-4">${item.item}</span>
          <i class="delete ml-auto cursor-pointer fa fa-trash" aria-hidden="true"></i>
      </li>`;
    });
  }
  return;
};
const deleteTodo = () => {
  const todosList = list.children;
  const todosArray = [...todosList];

  todosArray.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      const { parentElement } = event.target;
      if (event.target.className.includes("delete")) {
        console.log("delete icon clicked");
        parentElement.remove();
        todoItems.splice(index, 1);
        saveToLocalStorage(todoItems);
      } else {
        return;
      }
    });
  });
};

const markCompleteTodo = () => {
  const todosList = list.children;
  const todosArray = [...todosList];

  todosArray.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      const { parentElement } = event.target;
      if (event.target.className.includes("completed")) {
        console.log("checkmark icon clicked");
        todoItems[index].completed = !todoItems[index].completed;
        parentElement.classList.toggle("finished");
        saveToLocalStorage(todoItems);
      } else {
        return;
      }
    });
  });
};

const displayTodo = () => {
  // Get value from input field
  getinputValue();

  // add todo to the list
  addTodo(todoItems);

  // delete item todo
  deleteTodo();

  // completed item todo
  markCompleteTodo();

  // save to local storage on button click
  saveToLocalStorage(todoItems);
};

button.addEventListener("click", displayTodo);
input.addEventListener(
  "keypress",
  (e) => (e.key === "Enter" || e.keyCode === 13) && displayTodo()
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

const getCompletedTodos = () => {
  const completedTodos = todoItems.filter((item) => item.completed !== false);
  addTodo(completedTodos);
};
const completedTasks = document.querySelector(".completed");
completedTasks.addEventListener("click", getCompletedTodos);

const getIncompleteTasks = () => {
  const incomplTodos = todoItems.filter((item) => item.completed === false);
  addTodo(incomplTodos);
};
const incompleteTasks = document.querySelector(".incompleted");
incompleteTasks.addEventListener("click", getIncompleteTasks);

const getAllTodos = () => {
  addTodo(todoItems);
};

const all = document.querySelector(".all");
all.addEventListener("click", getAllTodos);

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todosList", JSON.stringify(todos));
};

const getFromLocalStorage = () => {
  if (localStorage.getItem("todosList") === null) {
    return;
  } else {
    todoItems = [...JSON.parse(localStorage.getItem("todosList"))];
    addTodo(todoItems);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  if (list.children) {
    markCompleteTodo();
    deleteTodo();
  }
});
getFromLocalStorage();
