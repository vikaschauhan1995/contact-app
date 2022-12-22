

export function sortArrayOfObjectByKey(arr, key) {
  let sortedArr = arr?.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  });
  if (!sortedArr) {
    sortedArr = [];
  }
  return sortedArr;
}