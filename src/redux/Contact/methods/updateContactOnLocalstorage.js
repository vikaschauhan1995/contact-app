import { CONTACT_LOCAL_STORAGE_KEY } from "../const";
import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { saveDataToLocalStorageByKey } from "./saveDataToLocalStorageByKey";

function replaceObjectFromArray(array, obj) {
  const newArray = array.map((item) => {
    if (item.id === obj.id) {
      return obj;
    } else {
      return item;
    }
  });
  return newArray;
}

export function updateContactOnLocalstorage(obj) {
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      let localStorageContacts = await getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
      if (!localStorageContacts) {
        localStorageContacts = [];
      }
      const updatedArray = replaceObjectFromArray(localStorageContacts, obj);
      saveDataToLocalStorageByKey(CONTACT_LOCAL_STORAGE_KEY, updatedArray);
      resolve(updatedArray);
    }, 1000);
  });
}