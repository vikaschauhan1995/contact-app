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
    <View style={styles.contactContainer}>
      <View style={styles.contactInnerContainer}>
        <View style={styles.contactHeader}>
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
        </View>
        <View style={styles.contactHeader2}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("CreateContactScreen")
          }}>
            <Text style={{ textAlign: 'center' }}>Create Contact +</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactBody}>
          <ContactList list={filteredList === false ? contactList : filteredList} />
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
    // height: 100,
  },
  contactHeader2: {
    height: 50,
    justifyContent: 'center',
    textAlign: 'center'
  },
  contactBody: {
    flex: 1,
  },
  input: {
    // flex: 1
  }
});

export default withNavigation(ContactListPage)
