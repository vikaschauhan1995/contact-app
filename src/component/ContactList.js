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
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

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
          style: { backgroundColor: 'red' }
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
  // console.log("sortedList list ===>>>", sortedList);
  return (
    <View>
      <FlatList
        data={sortedList}
        renderItem={({ item }) => {
          return <View style={styles.container}>
            <View style={styles.main}>
              <Button
                style={{ justifyContent: 'start' }}
                buttonStyle={styles.createButtonStyle}
                titleStyle={styles.createButtonTitleStyle}
                title={
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
                }
                onPress={() => {
                  navigation.navigate(EDIT_CONTACT_SCREEN_NAVIGATION_KEY, { id: item.id })
                }}
              />
            </View>
            <View style={styles.right}>
              <Button
                buttonStyle={styles.deleteButtonStyle}
                titleStyle={styles.createButtonTitleStyle}
                title={
                  <AntDesign name="delete" style={styles.deleteIcon} />
                }
                onPress={() => onClickDeleteButton(item.id)}
              />
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
    width: '100%'
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
    flex: 1,
  },
  right: {
    justifyContent: 'center',
  },
  deleteIcon: {
    fontSize: 24,
    color: 'grey'
  },
  createButtonStyle: {
    backgroundColor: 'rgba(244, 244, 244, 0)',
    marginHorizontal: 10,
  },
  createButtonTitleStyle: {
    color: 'black',
  },
  deleteButtonStyle: {
    backgroundColor: 'rgba(244, 244, 244, 0)',
    marginHorizontal: 10,
  }
});

export default withNavigation(ContactList);