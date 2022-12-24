import { attactiveColorCodes } from "../../../constant";
import { BATCH_COLOR } from "../const";
import { randomRange } from "./saveContactToLocalStorage";


export function provideRandomColorToSingleContact(obj) {
  const randomNumber = randomRange(1, 19);
  const color = attactiveColorCodes[randomNumber];
  const newObj = { ...obj, [BATCH_COLOR]: color };
  return newObj;
}

export function provideRandomColorToContacts(arr) {
  const newArray = arr.map(item => {
    const randomNumber = randomRange(1, 19);
    const color = attactiveColorCodes[randomNumber];
    const obj = { ...item, [BATCH_COLOR]: color };
    return obj;
  });
  return newArray;
}