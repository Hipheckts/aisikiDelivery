import React from 'react';
// import RegisterScreen from '../screens/RegisterScreen';
import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { StatusBar, View, Text } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import OTPScreen from '../screens/OTPScreen';
import colors from '../config/colors';
import Icon from '../components/Icon';


export default function AuthNavigator() {   
    const Stack = createStackNavigator();
    // return (
    //     <View>
    //     <Text>Open up App.tsx to start working on your app!</Text>
    //     <StatusBar />
    //   </View>
    // );
    return (
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true,
                title: '',
                headerBackTitleVisible: true,
                headerTitleAlign: 'center',
                headerBackTitle: 'Login',
                headerBackTitleStyle: {
                    color: colors.black,
                    fontWeight: 'bold',
                    marginStart: 10
                },
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
                headerTintColor: colors.black,
                // headerLeft: () => (
                //   <Icon name="back" />
                // ),
              }}/>
          {/* <Stack.Screen name="ChooseRegister" component={ChooseRegister} options={{
                headerShown: true,
                title: '',
                headerBackTitleVisible: true,
                headerTitleAlign: 'center',
                headerBackTitle: 'Register',
                headerBackTitleStyle: {
                    color: colors.black,
                    fontWeight: 'bold',
                    marginStart: 10
                },
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
                headerTintColor: colors.black,
                // headerLeft: () => (
                //   <Icon name="back" />
                // ),
                }}
                /> */}
          <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerShown: true,
                title: '',
                headerBackTitleVisible: true,
                headerTitleAlign: 'center',
                headerBackTitle: 'Register',
                headerBackTitleStyle: {
                    color: colors.black,
                    fontWeight: 'bold',
                    marginStart: 10
                },
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
                headerTintColor: colors.black,
                // headerLeft: () => (
                //   <Icon name="back" />
                // ),
                }}/>
          <Stack.Screen name="OTPScreen" component={OTPScreen} options={{
                headerShown: true,
                title: '',
                headerBackTitleVisible: true,
                headerTitleAlign: 'center',
                headerBackTitle: 'Verification',
                headerBackTitleStyle: {
                    color: colors.black,
                    fontWeight: 'bold',
                    marginStart: 10
                },
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
                headerTintColor: colors.black,
                // headerLeft: () => (
                //   <Icon name="back" />
                // ),
                }}/>
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      );
}
