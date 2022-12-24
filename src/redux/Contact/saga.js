import {
  CONTACT_SAVE_ERROR,
  GET_CONTACTS,
  SAVE_CONTACT,
  SET_CONTACT_LIST,
  CONTACT_LOCAL_STORAGE_KEY,
  ADD_CONTACT_TO_CONTACT_LIST,
  DELETE_CONTACT,
  REMOVE_CONTACT_FROM_CONTACT_LIST,
  UPDATE_CONTACT
} from './const';
import { takeLatest, put } from 'redux-saga/effects';
import { saveContactToLocalStorage } from './methods/saveContactToLocalStorage';
import { getDataFromLocalStorage } from './methods/getDataFromLocalStorage';
import { deleteContactById } from './methods/deleteContactById';
import { updateContactOnLocalstorage } from './methods/updateContactOnLocalstorage';
import { provideRandomColorToSingleContact, provideRandomColorToContacts } from './methods/provideRandomColorToContacts';

function* saveContact(params) {
  try {
    const formData = params?.payload;
    const newContact = yield saveContactToLocalStorage(formData);
    const newContactWithBatchColorProvided = yield provideRandomColorToSingleContact(newContact);
    yield put({ type: ADD_CONTACT_TO_CONTACT_LIST, payload: newContactWithBatchColorProvided });
  } catch (error) {
    // debugger;
    console.log("error", error);
    yield put({ type: CONTACT_SAVE_ERROR, payload: "Got erorr while saving contact" });
  }
}

function* getContacts() {
  try {
    const contacts = yield getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
    const batchColorProvidedContacts = yield provideRandomColorToContacts(contacts);
    yield put({ type: SET_CONTACT_LIST, payload: batchColorProvidedContacts });
  } catch (error) {
    console.log('Got error while fetching contacts from local storage');
    yield put({ type: SET_CONTACT_LIST, payload: [] });
  }
}

function* deleteContact(params) {
  try {
    const id = params?.payload;
    yield deleteContactById(id);
    yield put({ type: REMOVE_CONTACT_FROM_CONTACT_LIST, payload: id });
    // console.log('deleteContact id=>', id);
  } catch (error) {
    console.log('Got error while deleting a contact from local storage Error: ', error);
  }
}

function* updateContact(params) {
  try {
    const contact = params?.payload;
    const updatedArray = yield updateContactOnLocalstorage(contact);
    yield put({ type: SET_CONTACT_LIST, payload: updatedArray });
  } catch (error) {
    console.log('Got error while updating contact error: ', error);
  }
}




export default function* saga() {
  yield takeLatest(GET_CONTACTS, getContacts);
  yield takeLatest(SAVE_CONTACT, saveContact);
  yield takeLatest(DELETE_CONTACT, deleteContact);
  yield takeLatest(UPDATE_CONTACT, updateContact);
}