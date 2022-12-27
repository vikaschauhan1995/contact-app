

export const findObjectByFromState = (arr, id) => {
  if (!arr) {
    arr = [];
  }
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].id === id) {
      return arr[x];
    }
  }
  return {};
}