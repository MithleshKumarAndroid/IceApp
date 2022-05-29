import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = (key: string, value: string) => {
  AsyncStorage.setItem(key, value);
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
