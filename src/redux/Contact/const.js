export const CONTACT_REDUCER = 'contactReducer';


export const CONTACT_LIST = 'contact_list';
export const IS_FILTERED_CONTACT_LIST_APPLIED = 'is_filtered_contact_list_applied';

export const FIRST_NAME = 'first_name';
export const LAST_NAME = 'last_name';
export const COMPANY = 'company';
export const PHONE = 'phone';
export const EMAIL = 'email';

export const BATCH_COLOR = 'batch_color';

export const SAVE_CONTACT = 'save_contact';
export const GET_CONTACTS = 'get_contacts';
export const DELETE_CONTACT = 'delete_contacts';
export const UPDATE_CONTACT = 'update_contacts';

export const CONTACT_LOCAL_STORAGE_KEY = 'contact';
export const CONTACT_SAVE_ERROR = 'contact_save_error';

export const SET_CONTACT_LIST = 'set_contact_list';
export const ADD_CONTACT_TO_CONTACT_LIST = 'add_contact_to_contact_list';
export const REMOVE_CONTACT_FROM_CONTACT_LIST = 'remove_contact_from_contact_list';
export const UPDATE_CONTACT_LIST = 'update_contact_list';

export const SET_FILTERED_CONTACT_LIST_APPLIED = 'set_filted_contact_list_applied'

export const initialContactState = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [COMPANY]: "",
  [PHONE]: "",
  [EMAIL]: ""
};