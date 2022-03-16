import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './app/auth/context';
import authStorage from './app/auth/storage';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { navigationRef } from './app/navigation/routeNavigation';
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
import AccountNavigator from './app/navigation/AccountNavigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {

  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
      const currentUser = await authStorage.getUser();
      setUser(JSON.parse(currentUser));
      console.log(currentUser);
  };

  const handleLoadingError = () => {
      throw new Error('App loading error');
  };

  const handleLoadingFinish = () => setIsReady(true);

  if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onError={handleLoadingError}
                onFinish={handleLoadingFinish}
            />
        );
  
  return (
    <View style={styles.container}>
            <AuthContext.Provider value={{ user, setUser }}>
                <OfflineNotice />
        <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
                <NavigationContainer
                    theme={navigationTheme}
                    ref={navigationRef}>
                      {/* <AuthNavigator /> */}
                    {user ? <AccountNavigator /> : <AuthNavigator />}
                </NavigationContainer>
                </View>
            </AuthContext.Provider>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
