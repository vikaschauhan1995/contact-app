import React, { useEffect } from 'react';
import ContactForm from '../component/ContactForm';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getContacts, saveContact } from '../redux/Contact/action';
import { withNavigation } from 'react-navigation';
import { HOME_SCREEN_NAVIGATION_KEY } from '../constant';

function CreateContact({ navigation }) {
  console.log("navigation", navigation);
  const dispatch = useDispatch();
  const save = (formData) => {
    dispatch(saveContact(formData));
    navigation.navigate(HOME_SCREEN_NAVIGATION_KEY);
  };
  return (
    <View>
      <ContactForm onSubmit={save} submitButtonTitle="Save" />
    </View>
  )
}

const styles = StyleSheet.create({});

export default withNavigation(CreateContact);