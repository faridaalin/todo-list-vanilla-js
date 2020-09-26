import deleteTodo from "./deleTodo.js";
import toggleComplete from "./toggleComplete.js";
import { LOCAL_STORAGE_KEY } from "../settings.js";
import { saveToStorage, getFromStorage } from "../storage/storage.js";

const renderTodos = (array) => {
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";

  if (array.length === 0) {
    list.innerHTML = `<li class="empty">This list is empty</li>`;
  }
  array.forEach((todo) => {
    let cssClass = "";
    todo.isComplete ? (cssClass = "complete") : cssClass;

    list.innerHTML += `<li class="${cssClass}">
                        <p>${todo.name}</p>
                        <button class="done" data-complete="${todo.id}">Done</button>
                        <button class="delete" data-id="${todo.id}">Delete</button>
                       </li>`;
  });

  const deleteButtons = document.querySelectorAll("li .delete");

  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    const filteredTodos = deleteTodo(id, array);
    saveToStorage(LOCAL_STORAGE_KEY, filteredTodos);
  };

  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDelete);
  });

  const completeButtons = document.querySelectorAll("li .done");

  const handleComplete = (e) => {
    const id = e.target.dataset.complete;
    const toggledTodo = toggleComplete(id, array);
    saveToStorage(LOCAL_STORAGE_KEY, toggledTodo);
  };

  completeButtons.forEach((button) => {
    button.addEventListener("click", handleComplete);
  });
};

export default renderTodos;
