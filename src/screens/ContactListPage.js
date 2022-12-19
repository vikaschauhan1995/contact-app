import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

function ContactListPage({ navigation }) {
  // console.log("navigation", navigation.navigate(CreateContactList));
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
