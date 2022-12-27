import React, { useState, useEffect } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View, TextInput } from 'react-native';
import { FIRST_NAME, LAST_NAME, COMPANY, PHONE, EMAIL, BATCH_COLOR } from '../redux/Contact/const';
import { Picker } from '@react-native-picker/picker';
import Spacer from './Spacer';
import { button } from '../styled_objects/button';

const initialState = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [COMPANY]: "",
  [PHONE]: "",
  [EMAIL]: "",
  [BATCH_COLOR]: ""
};

function ContactForm({ formData = initialState, onSubmit, submitButtonTitle }) {
  const [firstName, setFirstsName] = useState(formData[FIRST_NAME]);
  const [lastName, setLastsName] = useState(formData[LAST_NAME]);
  const [company, setCompany] = useState(formData[COMPANY]);
  const [phone, setPhone] = useState(formData[PHONE]);
  const [email, setEmail] = useState(formData[EMAIL]);
  const [batchColor, setBatchColor] = useState(formData[BATCH_COLOR])

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
    [EMAIL]: email,
    [BATCH_COLOR]: batchColor
  };
  useEffect(() => {
    setFirstsName(formData[FIRST_NAME]);
    setLastsName(formData[LAST_NAME]);
    setCompany(formData[COMPANY]);
    setPhone(formData[PHONE]);
    setEmail(formData[EMAIL]);
    setBatchColor(formData[BATCH_COLOR]);
  }, [formData])
  return (
    <View>
      <View style={styles.header}>
        <View style={{ ...styles.headerLeft, marginLeft: 15 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text>Save to</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <View style={styles.customPickerStyle}>
              <Picker
                style={styles.pickerStyle}
                itemStyle={{
                  backgroundColor: 'green',
                  marginLeft: 0,
                  paddingLeft: 15
                }}
                itemTextStyle={{ fontSize: 18, color: 'blue' }}
                mode="dropdown">
                <Picker.Item label="Local Storage" value="localStorage" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Button
            containerStyle={{ ...button.primaryButtonContainerStyle, marginRight: 15 }}
            buttonStyle={{ ...button.primaryButtonStyle }}
            title={submitButtonTitle}
            onPress={() => onSubmit(userData)}
          />
        </View>
      </View>
      <Spacer />
      <Input
        value={firstName}
        inputContainerStyle={styles.inputContainerStyle}
        placeholderTextColor="rgb(99, 99, 99)"
        onChangeText={handleFirstNameChange}
        placeholder="First Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={lastName}
        inputContainerStyle={styles.inputContainerStyle}
        placeholderTextColor="rgb(99, 99, 99)"
        onChangeText={handleLastNameChange}
        placeholder="Last Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={company}
        inputContainerStyle={styles.inputContainerStyle}
        placeholderTextColor="rgb(99, 99, 99)"
        onChangeText={handleCompanyChange}
        placeholder="Company"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={phone}
        inputContainerStyle={styles.inputContainerStyle}
        placeholderTextColor="rgb(99, 99, 99)"
        onChangeText={handlePhoneChange}
        keyboardType='numeric'
        placeholder="Phone"
      />
      <Input
        value={email}
        inputContainerStyle={styles.inputContainerStyle}
        placeholderTextColor="rgb(99, 99, 99)"
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
    paddingVertical: 7,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(177, 210, 227, 1)'
  },
  headerLeft: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  inputContainerStyle: {
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    marginTop: -10
  },
  pickerStyle: {
    width: 190,
    marginTop: -14,
  },
  customPickerStyle: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 20,
    height: 30,
    borderWidth: 1,
  },
  pickerItemStyle: {
    backgroundColor: 'green',
  },
});

export default ContactForm;