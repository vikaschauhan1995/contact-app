import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { saveDataToLocalStorageByKey } from './saveDataToLocalStorageByKey';
import { CONTACT_LOCAL_STORAGE_KEY } from '../const';

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function saveContactToLocalStorage(contact) {
  const newContact = { ...contact, id: randomRange(100000, 999999) }
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      let localStorageContacts = await getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
      if (!localStorageContacts) {
        localStorageContacts = [];
      }
      localStorageContacts.push(newContact);
      saveDataToLocalStorageByKey(CONTACT_LOCAL_STORAGE_KEY, localStorageContacts);
      console.log("localStorageContacts", localStorageContacts);
      resolve();
    }, 1000);
  });
}