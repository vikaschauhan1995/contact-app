import { SAVE_CONTACT, GET_CONTACTS, DELETE_CONTACT } from './const';

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

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}