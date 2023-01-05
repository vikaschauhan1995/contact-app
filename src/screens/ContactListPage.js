import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../component/ContactList';
import { filterListOfObjs } from '../methods/filterListOfObjs';
import { getContacts, setFilteredContactListApplied } from '../redux/Contact/action';
import { CONTACT_REDUCER, CONTACT_LIST, IS_FILTERED_CONTACT_LIST_APPLIED } from '../redux/Contact/const';

function ContactListPage({ navigation }) {
  const contactList = useSelector(state => {
    return state[CONTACT_REDUCER][CONTACT_LIST]
  });
  const isFilteredContactListApplied = useSelector(state => state[CONTACT_REDUCER][IS_FILTERED_CONTACT_LIST_APPLIED]);
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState(false);
  const dispatch = useDispatch();
  const copyContactList = () => {
    if (filteredList === false) {
      setFilteredList(contactList);
      dispatch(setFilteredContactListApplied(true));
    }
  }
  const handleInputChange = (text) => {
    setInput(text);
    const filteredList = filterListOfObjs(contactList, text);
    setFilteredList(filteredList);
  }
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactInnerContainer}>
        <View style={styles.contactHeader}>
          {/* <View style={styles.contactHeaderInputInnerContainer}> */}
          <Input
            value={input}
            inputContainerStyle={styles.inputContainerStyle}
            placeholderTextColor="rgb(99, 99, 99)"
            onChangeText={handleInputChange}
            onFocus={copyContactList}
            // label="search"
            style={styles.input}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {/* </View> */}
        </View>
        <View style={styles.contactHeader2}>
          <Button
            buttonStyle={styles.createButtonStyle}
            titleStyle={styles.createButtonTitleStyle}
            onPress={() => {
              navigation.navigate("CreateContactScreen")
            }} title="Create Contact +" />
        </View>
        <View style={styles.contactBody}>
          <ContactList list={isFilteredContactListApplied === false ? contactList : filteredList} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100%',
    flexDirection: 'row',
    // borderWidth: 20,
    // borderStyle: 'solid',
    // borderColor: 'blue'
  },
  contactInnerContainer: {
    flex: 1,
    marginTop: 50,
  },
  contactHeader: {
    height: 60,
    // display: 'flex',
    // justifyContent: 'center'
  },
  contactHeader2: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  contactBody: {
    flex: 1,
  },
  input: {
    // flex: 1

  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: 'rgba(209, 236, 255, 1)',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  createButtonStyle: {
    backgroundColor: 'rgba(244, 244, 244, 0)',
    marginHorizontal: 10
  },
  createButtonTitleStyle: {
    color: 'black'
  },
});

export default withNavigation(ContactListPage)
