import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../component/ContactList';
import { getContacts } from '../redux/Contact/action';
import { CONTACT_REDUCER, CONTACT_LIST } from '../redux/Contact/const';

function ContactListPage({ navigation }) {
  const contactList = useSelector(state => state[CONTACT_REDUCER][CONTACT_LIST]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <View>
      <Input
        // value={email}
        // onChange={handleEmailChange}
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
      <ContactList list={contactList} />
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
