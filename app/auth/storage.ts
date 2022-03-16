import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';
const userKey = 'authUser';

const storeToken = async (authToken: string) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
        // console.log(authToken);
    } catch (error) {
        console.log(error);
        // throw new Error('Error storing the auth token');
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        throw new Error('Error getting the auth token');
    }
};

const storeUser = async (user: any) => {
    try {
        await SecureStore.setItemAsync(userKey, JSON.stringify(user));
    } catch (error) {
        console.log(error);
        throw new Error('Error storing user');
    }
};

const getUser = async (): Promise<any> => {
    try {
        return await SecureStore.getItemAsync(userKey);
    } catch (error) {
        throw new Error('Error getting the user data');
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        throw new Error('Error removing the auth token');
    }
};

const removeUser = async () => {
    try {
        await SecureStore.deleteItemAsync(userKey);
    } catch (error) {
        throw new Error('Error removing the user');
    }
};

export default {
    getToken,
    removeToken,
    storeToken,
    storeUser,
    getUser,
    removeUser
};
