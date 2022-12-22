import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import ContactForm from '../component/ContactForm';
import { findObjectById } from '../redux/Contact/methods/findObjectById';
import { initialContactState } from '../redux/Contact/const';

function EditContact({ navigation }) {
  const [contact, setContact] = useState(initialContactState);
  const getContact = async () => {
    const id = navigation?.state?.params?.id;
    console.log("EditContact id=>", id);
    const obj = await findObjectById(id);
    setContact(obj);
  }
  const update = (formData) => {
    console.log('formData =>>', formData);
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