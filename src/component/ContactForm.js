import React, { useState, useEffect } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View, TextInput } from 'react-native';
import { FIRST_NAME, LAST_NAME, COMPANY, PHONE, EMAIL } from '../redux/Contact/const';

const initialState = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [COMPANY]: "",
  [PHONE]: "",
  [EMAIL]: ""
};

function ContactForm({ formData = initialState, onSubmit, submitButtonTitle }) {
  console.log("ContactForm state ==>", formData);
  const [firstName, setFirstsName] = useState(formData[FIRST_NAME]);
  const [lastName, setLastsName] = useState(formData[LAST_NAME]);
  const [company, setCompany] = useState(formData[COMPANY]);
  const [phone, setPhone] = useState(formData[PHONE]);
  const [email, setEmail] = useState(formData[EMAIL]);

  const handleFirstNameChange = (text) => {
    setFirstsName(text);
  }
  const handleLastNameChange = (text) => {
    setLastsName(text);
  }
  const handleCompanyChange = (text) => {
    setCompany(text);
  }
  const handlePhoneChange = (text) => {
    setPhone(text);
  }
  const handleEmailChange = (text) => {
    setEmail(text);
  }
  // console.log("firstName, ", firstName, lastName, company, phone, email);
  const userData = {
    "id": formData?.id ? formData?.id : null,
    [FIRST_NAME]: firstName,
    [LAST_NAME]: lastName,
    [COMPANY]: company,
    [PHONE]: phone,
    [EMAIL]: email
  };
  useEffect(() => {
    setFirstsName(formData[FIRST_NAME]);
    setLastsName(formData[LAST_NAME]);
    setCompany(formData[COMPANY]);
    setPhone(formData[PHONE]);
    setEmail(formData[EMAIL]);
  }, [formData])
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text>Save to <Text>Localstorage</Text></Text>
        </View>
        <View style={{ width: 100 }}>
          <Button title={submitButtonTitle} onPress={() => onSubmit(userData)} />
        </View>
      </View>
      <TextInput
        value={firstName}
        onChangeText={handleFirstNameChange}
        placeholder="First Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        value={lastName}
        onChangeText={handleLastNameChange}
        placeholder="Last Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        value={company}
        onChangeText={handleCompanyChange}
        placeholder="Company"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType='numeric'
        placeholder="Phone"
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // display: 'flex',
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default ContactForm;