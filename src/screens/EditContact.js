import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import ContactForm from '../component/ContactForm';

function EditContact({ navigation }) {
  const id = navigation?.state?.params?.id;
  console.log("id ==>", id);
  useEffect(() => {

  }, []);
  return (
    <View>
      <ContactForm submitButtonTitle="Update" />
    </View>
  )
}

export default withNavigation(EditContact);