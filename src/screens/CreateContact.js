import React from 'react';
import ContactForm from '../component/ContactForm';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

function CreateContact() {
  const state = useSelector(state => state);
  console.log("state", state);
  return (
    <View>
      <ContactForm />
    </View>
  )
}

const styles = StyleSheet.create({});

export default CreateContact;