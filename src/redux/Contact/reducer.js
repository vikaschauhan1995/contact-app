import { ADD_CONTACT_TO_CONTACT_LIST, CONTACT_LIST, IS_FILTERED_CONTACT_LIST_APPLIED, SET_CONTACT_LIST, REMOVE_CONTACT_FROM_CONTACT_LIST, UPDATE_CONTACT_LIST, SET_FILTERED_CONTACT_LIST_APPLIED } from './const';
import { removeObjectByid } from './methods/removeObjectByid';
import { replaceObjectFromList } from './methods/replaceObjectFromList';

const initialState = {
  [CONTACT_LIST]: [],
  [IS_FILTERED_CONTACT_LIST_APPLIED]: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_CONTACT_LIST_APPLIED:
      return { ...state, [IS_FILTERED_CONTACT_LIST_APPLIED]: action.payload };
    case SET_CONTACT_LIST:
      return { ...state, [CONTACT_LIST]: action.payload };
    case ADD_CONTACT_TO_CONTACT_LIST:
      const newState = { ...state, [CONTACT_LIST]: [...state[CONTACT_LIST], action.payload] };
      return newState;
    case REMOVE_CONTACT_FROM_CONTACT_LIST:
      const newArr = removeObjectByid(state[CONTACT_LIST], action.payload);
      return { ...state, [CONTACT_LIST]: newArr };
    case UPDATE_CONTACT_LIST:
      const updatedArr = replaceObjectFromList(state[CONTACT_LIST], action.payload);
      return { ...state, [CONTACT_LIST]: updatedArr };
    default:
      return state;
  }
}