import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { saveDataToLocalStorageByKey } from './saveDataToLocalStorageByKey';
import { CONTACT_LOCAL_STORAGE_KEY } from '../const';

export function findObjectById(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      let localStorageContacts = await getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
      if (!localStorageContacts) {
        localStorageContacts = [];
      }
      const obj = localStorageContacts.find((item) => {
        if (item['id'] === id) {
          return item;
        }
      });
      // saveDataToLocalStorageByKey(CONTACT_LOCAL_STORAGE_KEY, localStorageContacts);
      resolve(obj);
    }, 1000);
  });
}