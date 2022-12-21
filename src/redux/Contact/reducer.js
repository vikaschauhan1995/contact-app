import { ADD_CONTACT_TO_CONTACT_LIST, CONTACT_LIST, SET_CONTACT_LIST } from './const';

const initialState = {
  [CONTACT_LIST]: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_LIST:
      return { ...state, [CONTACT_LIST]: action.payload };
    case ADD_CONTACT_TO_CONTACT_LIST:
      // debugger;
      const newState = { ...state, [CONTACT_LIST]: [...state[CONTACT_LIST], action.payload] };
      console.log("newState", newState);
      return newState;
    default:
      return state;
  }
}