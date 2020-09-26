import displayDate from "./components/displayDate.js";
import addTodo from "./components/addTodo.js";
import deleteAllItems from "./components/deleteAllTodos.js";
import filterItems from "./components/filterClicked.js";
import { LOCAL_STORAGE_KEY } from "./settings.js";
import { saveToStorage, getFromStorage } from "./storage/storage.js";

const button = document.querySelector(".button");
const input = document.querySelector("#todo");

input.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter" || e.keyCode == 13) {
    addTodo();
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

// show todays date
displayDate();

// get todolist from localStorage
window.addEventListener("load", () => {
  const todos = getFromStorage(LOCAL_STORAGE_KEY);
  saveToStorage(LOCAL_STORAGE_KEY, todos);
});

// delete all todos
deleteAllItems();
// filter todos
filterItems();
