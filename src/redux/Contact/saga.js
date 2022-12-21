import {
  CONTACT_SAVE_ERROR,
  GET_CONTACTS,
  SAVE_CONTACT,
  SET_CONTACT_LIST,
  CONTACT_LOCAL_STORAGE_KEY,
  ADD_CONTACT_TO_CONTACT_LIST
} from './const';
import { takeLatest, put } from 'redux-saga/effects';
import { saveContactToLocalStorage } from './methods/saveContactToLocalStorage';
import { getDataFromLocalStorage } from './methods/getDataFromLocalStorage';

function* saveContact(params) {
  try {
    const formData = params?.payload;
    yield put({ type: ADD_CONTACT_TO_CONTACT_LIST, payload: formData });
    yield saveContactToLocalStorage(formData);
  } catch (error) {
    // debugger;
    console.log("error", error);
    yield put({ type: CONTACT_SAVE_ERROR, payload: "Got erorr while saving contact" });
  }
}

function* getContacts() {
  try {
    const contacts = yield getDataFromLocalStorage(CONTACT_LOCAL_STORAGE_KEY);
    yield put({ type: SET_CONTACT_LIST, payload: contacts });
  } catch (error) {
    console.log('Got error while fetching contacts from local storage');
    yield put({ type: SET_CONTACT_LIST, payload: [] });
  }
}



export default function* saga() {
  yield takeLatest(GET_CONTACTS, getContacts);
  yield takeLatest(SAVE_CONTACT, saveContact);
}