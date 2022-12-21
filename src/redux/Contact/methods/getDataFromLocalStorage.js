import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getDataFromLocalStorage(key) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (!data) {
      data = [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.log('Get error in getDataFromLocalStorage: ', error);
    return [];
  }
}