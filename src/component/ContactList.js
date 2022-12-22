import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { FIRST_NAME, LAST_NAME, PHONE } from '../redux/Contact/const';
import { withNavigation } from 'react-navigation';
import { EDIT_CONTACT_SCREEN_NAVIGATION_KEY } from '../constant';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/Contact/action';
import { sortArrayOfObjectByKey } from '../redux/Contact/methods/sortArrayOfObjectByKey';

const ContactList = ({ navigation, list }) => {
  const dispatch = useDispatch();
  const sortedList = sortArrayOfObjectByKey(list, FIRST_NAME);
  return (
    <View>
      <FlatList
        data={sortedList}
        renderItem={({ item }) => {
          return <View style={styles.container}>
            <View style={styles.main}>
              <TouchableOpacity
                style={styles.list}
                onPress={() => {
                  navigation.navigate(EDIT_CONTACT_SCREEN_NAVIGATION_KEY, { id: item.id })
                }}>
                <View style={styles.innerContainer}>
                  <Text>Name: {item[FIRST_NAME]} {item[LAST_NAME]}</Text>
                  <Text>Phone: {item[PHONE]}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <TouchableOpacity onPress={() => {
                dispatch(deleteContact(item.id))
              }}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  list: {
    height: 50,
    justifyContent: 'center',
  },
  innerContainer: {
  },
  container: {
    border: '1px solid #ebebeb',
    display: 'flex',
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  main: {
    flex: 1
  },
  right: {
    justifyContent: 'center',
  }
});

export default withNavigation(ContactList);