import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import CreateContact from './src/screens/CreateContact';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { CREATE_CONTACT_SCREEN_NAVIGATION_KEY, HOME_SCREEN_NAVIGATION_KEY } from './src/constant';
import { setNavigator } from './src/utils/navigationRef';


const navigator = createStackNavigator({
  [HOME_SCREEN_NAVIGATION_KEY]: Home,
  [CREATE_CONTACT_SCREEN_NAVIGATION_KEY]: CreateContact,
}, {
  initialRouteKey: HOME_SCREEN_NAVIGATION_KEY,
  defaultNavigationOptions: {
    title: "Contact"
  }
});
const App = createAppContainer(navigator);
export default () => {
  return <Provider store={store}>
    <App ref={(navigator => setNavigator(navigator))} />
  </Provider>
}