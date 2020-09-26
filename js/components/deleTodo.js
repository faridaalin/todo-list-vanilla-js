const deleteTodo = (id, array) => {
  const filteredArray = array.filter((item) => item.id !== parseInt(id));
  return filteredArray;
};
export default deleteTodo;
