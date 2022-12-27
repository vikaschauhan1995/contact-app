
export function replaceObjectFromList(array, obj) {
  if (!array) {
    array = [];
  }
  const newArr = array.map((item) => {
    if (item['id'] === obj.id) {
      return obj;
    } else {
      return item;
    }
  });
  return newArr;
}