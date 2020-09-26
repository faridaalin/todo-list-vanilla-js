import { saveToStorage, getFromStorage } from "../storage/storage.js";
import { LOCAL_STORAGE_KEY } from "../settings.js";

const deleteAllItems = () => {
  const deleteAll = document.querySelector("#deleteAll");
  const handleDeleteAll = (e) => {
    e.preventDefault();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    saveToStorage(LOCAL_STORAGE_KEY, []);
  };

  deleteAll.addEventListener("click", handleDeleteAll);
};

export default deleteAllItems;
