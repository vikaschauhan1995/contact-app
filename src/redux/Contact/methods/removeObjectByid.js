

export const removeObjectByid = (arr, id) => {
  const a = arr.filter(o => o.id !== id);
  // debugger;
  return a;
}