import renderTodos from "../components/renderTodos.js";

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  renderTodos(value);
};

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return [];
  }

  return JSON.parse(value);
};
