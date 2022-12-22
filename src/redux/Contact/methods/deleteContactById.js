import { getDataFromLocalStorage } from './getDataFromLocalStorage';
import { CONTACT_LOCAL_STORAGE_KEY } from '../const';
import { saveDataToLocalStorageByKey } from './saveDataToLocalStorageByKey';

export async function deleteContactById(id) {
  const allContacts = await getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
  const newContacts = allContacts.filter(contact => {
    if (contact.id !== id) {
      return true;
    }
  });
  await saveDataToLocalStorageByKey(CONTACT_LOCAL_STORAGE_KEY, newContacts);
}