import React from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

function ContactForm() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text>Save to <Text>Localstorage</Text></Text>
        </View>
        <View style={{ width: 100 }}>
          <Button title="Save" />
        </View>
      </View>
      <Input
        // value={email}
        // onChange={handleEmailChange}
        // label="search"
        // style={styles.input}
        placeholder="First Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Last Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Company"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        keyboardType='numeric'
        placeholder="Phone"
      />
      <Input
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // display: 'flex',
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default ContactForm;