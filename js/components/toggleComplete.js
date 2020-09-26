const toggleComplete = (id, array) => {
  const index = array.findIndex((item) => item.id === parseInt(id));
  array[index].isComplete = !array[index].isComplete;
  return array;
};

export default toggleComplete;
