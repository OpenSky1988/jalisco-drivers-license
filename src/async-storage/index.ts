import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObject, tryParseJSONObject } from '../utils';

const store = async (key: string, value: unknown) => {
  try {
    await AsyncStorage.setItem(key, isObject(value) ? JSON.stringify(value) : (value as string));
  } catch (e) {
    throw new Error(`Cannot put value to device storage ${e}`);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return tryParseJSONObject(value) || value;
  } catch (e) {
    throw new Error(`Cannot read value from device storage ${e}`);
  }
};

const getAll = async () => {
  try {
    const result: any = {};
    const keys = await AsyncStorage.getAllKeys();

    for (const key of keys) {
      const value = await AsyncStorage.getItem(key);
      result[key] = value;
    }

    return result;
  } catch (e) {
    throw new Error(`Cannot read from device storage ${e}`);
  }
};

const storeAll = async (userData: { [key: string]: string }) => {
  try {
    const dataKeys: string[] = Object.keys(userData);

    await Promise.all(
      dataKeys.map(async (dataKey: string) => {
        await store(dataKey, userData[dataKey]);
      }),
    );
  } catch (e) {
    throw new Error(`Cannot put to device storage ${e}`);
  }
};

export { get, getAll, store, storeAll };
