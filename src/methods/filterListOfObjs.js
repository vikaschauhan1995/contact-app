import { FIRST_NAME, LAST_NAME } from '../redux/Contact/const';

export function filterListOfObjs(arr, input) {
  if (input === undefined || input === "") {
    return arr;
  }
  const lowerInput = input.toLowerCase();
  let x = arr?.filter((a) => {
    const f_name = a[FIRST_NAME].toLowerCase();
    const l_name = a[LAST_NAME].toLowerCase();
    if (f_name.includes(lowerInput) || l_name.includes(lowerInput)) {
      return a;
    }
  });
  return x;
}