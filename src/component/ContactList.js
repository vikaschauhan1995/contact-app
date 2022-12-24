import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { View } from 'react-native';
import { FIRST_NAME, LAST_NAME, PHONE, BATCH_COLOR } from '../redux/Contact/const';
import { withNavigation } from 'react-navigation';
import { attactiveColorCodes, EDIT_CONTACT_SCREEN_NAVIGATION_KEY } from '../constant';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/Contact/action';
import { sortArrayOfObjectByKey } from '../redux/Contact/methods/sortArrayOfObjectByKey';

const ContactList = ({ navigation, list }) => {
  const dispatch = useDispatch();
  const sortedList = sortArrayOfObjectByKey(list, FIRST_NAME);
  const [stagedIdToAlert, setStagedIdToAlert] = useState(null);

  const onClickDeleteButton = (itemId) => {
    Alert.alert(
      'Delete Contact',
      `${itemId}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel clicked'),
          style: 'cancel'
        },
        {
          text: 'Ok',
          onPress: () => dispatch(deleteContact(stagedIdToAlert))
        }
      ]
    );
    setStagedIdToAlert(itemId);
  }
  const GetFirstLetter = ({ string, secondString }) => {
    let letter = '?';
    try {
      if (string.length > 0) {
        letter = string[0];
      } else if (secondString.length > 0) {
        letter = secondString[0];
      }
    } catch (error) {
      console.log('Something went wrong while getting first letter of string');
      letter = '?'
    };
    return letter.toUpperCase();
  }
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
                  <View style={{ ...styles.batchContainer, backgroundColor: item[BATCH_COLOR] }}>
                    <Text style={styles.batch}>
                      <GetFirstLetter string={item[FIRST_NAME]} secondString={item[LAST_NAME]} />
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.fontStyle}>{item[FIRST_NAME]} {item[LAST_NAME]}</Text>
                    {/* <Text style={styles.fontStyle}>Phone: {item[PHONE]}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <TouchableOpacity onPress={() => onClickDeleteButton(item.id)}>
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
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'blue'
  },
  batchContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    // backgroundColor: 'red',
    marginRight: 15
  },
  batch: {
    fontSize: 19,
    alignSelf: 'center',
    color: 'white'
  },
  container: {
    display: 'flex',
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  fontStyle: {
    fontSize: 17
  },
  main: {
    flex: 1
  },
  right: {
    justifyContent: 'center',
  }
});

export default withNavigation(ContactList);