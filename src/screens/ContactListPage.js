import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../component/ContactList';
import { filterListOfObjs } from '../methods/filterListOfObjs';
import { getContacts } from '../redux/Contact/action';
import { CONTACT_REDUCER, CONTACT_LIST } from '../redux/Contact/const';

function ContactListPage({ navigation }) {
  const contactList = useSelector(state => state[CONTACT_REDUCER][CONTACT_LIST]);
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState(false);
  const dispatch = useDispatch();
  const copyContactList = () => {
    if (filteredList === false) {
      setFilteredList(contactList);
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
    <View>
      <Input
        value={input}
        onChangeText={handleInputChange}
        onFocus={copyContactList}
        // label="search"
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={() => {
        navigation.navigate("CreateContactScreen")
      }}>
        <Text>Create Contact +</Text>
      </TouchableOpacity>
      <ContactList list={filteredList === false ? contactList : filteredList} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    border: '1px solid #fff'
  },
  input: {
    flex: 1
  }
});

export default withNavigation(ContactListPage)
