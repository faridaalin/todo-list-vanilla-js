import renderTodos from "./renderTodos.js";
import { LOCAL_STORAGE_KEY } from "../settings.js";
import { getFromStorage } from "../storage/storage.js";

const filterItems = () => {
  const filterClicked = (e) => {
    const latestTodos = getFromStorage(LOCAL_STORAGE_KEY);
    const { classList } = e.target;

    switch (true) {
      case classList.contains("completed"):
        const filteredCompleted = latestTodos.filter((item) => item.isComplete);
        renderTodos(filteredCompleted);
        break;

      case classList.contains("incompleted"):
        const filteredInCompleted = latestTodos.filter(
          (item) => item.isComplete === false
        );
        renderTodos(filteredInCompleted);

        break;

      default:
        return renderTodos(latestTodos);
    }
  };

  const filter = document.querySelectorAll(".filter-todos > span");
  filter.forEach((item) => {
    item.addEventListener("click", filterClicked);
  });
};

export default filterItems;
