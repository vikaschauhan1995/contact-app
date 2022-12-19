import { combineReducers } from 'redux';
import { reducer as contactReducer } from './Contact/reducer';
import { CONTACT_REDUCER } from './Contact/const';


export default combineReducers({ [CONTACT_REDUCER]: contactReducer });