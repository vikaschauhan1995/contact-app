import React from 'react'
import { View, Text } from 'react-native';
import ContactListPage from './ContactListPage';

function Home() {
  return (
    <View>
      <ContactListPage />
    </View>
  )
}

Home.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

export default Home
