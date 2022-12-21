import { SAVE_CONTACT, GET_CONTACTS } from './const';

export function saveContact(formData) {
  return {
    type: SAVE_CONTACT,
    payload: formData
  }
}

export function getContacts() {
  return {
    type: GET_CONTACTS
  }
}