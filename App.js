import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import CreateContact from './src/screens/CreateContact';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const navigator = createStackNavigator({
  HomeScreen: Home,
  CreateContactScreen: CreateContact
}, {
  initialRouteKey: "HomeScreen",
  defaultNavigationOptions: {
    title: "Contact"
  }
});
const App = createAppContainer(navigator);
export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
}