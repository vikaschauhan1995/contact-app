import { SAVE_CONTACT, GET_CONTACTS, DELETE_CONTACT, UPDATE_CONTACT, SET_FILTERED_CONTACT_LIST_APPLIED } from './const';

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

export function updateContact(contact) {
  return {
    type: UPDATE_CONTACT,
    payload: contact
  }
}

export function setFilteredContactListApplied(bool) {
  return {
    type: SET_FILTERED_CONTACT_LIST_APPLIED,
    payload: bool
  }
}