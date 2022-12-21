import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { FIRST_NAME, LAST_NAME, PHONE } from '../redux/Contact/const';

const ContactList = ({ list }) => {
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return <View style={styles.list}>
            <View style={styles.innerContainer}>
              <Text>Name: {item[FIRST_NAME]}{item[LAST_NAME]}</Text>
              <Text>Name: {item[PHONE]}</Text>
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
    border: '1px solid #ebebeb'
  },
  innerContainer: {
    marginHorizontal: 15
  }
});

export default ContactList
