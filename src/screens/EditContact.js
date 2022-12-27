import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import ContactForm from '../component/ContactForm';
import { findObjectById } from '../redux/Contact/methods/findObjectById';
import { initialContactState, CONTACT_REDUCER, CONTACT_LIST } from '../redux/Contact/const';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../redux/Contact/action';
import { HOME_SCREEN_NAVIGATION_KEY } from '../constant';
import { findObjectByFromState } from '../redux/Contact/methods/findObjectByIdFromState';

function EditContact({ navigation }) {
  const [contact, setContact] = useState(initialContactState);
  const contactList = useSelector(state => state[CONTACT_REDUCER][CONTACT_LIST]);
  const dispatch = useDispatch();
  const getContact = () => {
    const id = navigation?.state?.params?.id;
    const obj = findObjectByFromState(contactList, id);
    setContact(obj);
  }
  const update = (formData) => {
    dispatch(updateContact(formData));
    navigation.navigate(HOME_SCREEN_NAVIGATION_KEY);
  }
  useEffect(() => {
    getContact()
  }, []);
  return (
    <View>
      <ContactForm onSubmit={update} formData={contact} submitButtonTitle="Update" />
    </View>
  )
}

export default withNavigation(EditContact);