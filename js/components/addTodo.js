import { LOCAL_STORAGE_KEY } from "../settings.js";
import { getFromStorage, saveToStorage } from "../storage/storage.js";

const addTodo = () => {
  const input = document.querySelector("#todo");
  const inputValue = input.value.trim();
  const todos = getFromStorage(LOCAL_STORAGE_KEY);

  if (inputValue.length > 3) {
    const todo = {
      id: Date.now(),
      name: inputValue,
      isComplete: false,
    };
    todos.push(todo);
    saveToStorage(LOCAL_STORAGE_KEY, todos);
    input.value = "";
    input.focus();
  }
};

export default addTodo;
