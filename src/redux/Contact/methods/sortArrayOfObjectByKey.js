

export function sortArrayOfObjectByKey(arr, key) {
  let sortedArr = arr?.sort((a, b) => {
    const pre = a[key].toLowerCase();
    const post = b[key].toLowerCase();
    if (pre > post) {
      return 1;
    } else if (pre < post) {
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