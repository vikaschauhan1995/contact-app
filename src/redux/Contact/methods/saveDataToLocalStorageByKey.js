import AsyncStorage from '@react-native-async-storage/async-storage';

export function saveDataToLocalStorageByKey(key, value) {
  return new Promise(function (resolve) {
    const toJson = JSON.stringify(value)
    AsyncStorage.setItem(key, toJson);
    resolve();
  });
}