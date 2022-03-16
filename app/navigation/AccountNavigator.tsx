import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './AppNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import ViewProductScreen from '../screens/ViewProductScreen';
import colors from '../config/colors';

// import AccountScreen from '../screens/AccountScreen';
// import MessagesScreen from '../screens/MessagesScreen';

export type AccountNavigatorParamList = {
    Account: undefined;
    Messages: undefined;
};

export default function AccountNavigator() {
    // const Stack = createStackNavigator<AccountNavigatorParamList>();
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
            <Stack.Screen component={DashboardScreen} name="DashboardScreen" />
            <Stack.Screen component={ViewProductScreen} name="ViewProductScreen" options={{
                headerShown: true, title: 'View Product',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                headerBackTitleStyle: {
                    color: colors.white,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    color: colors.white,
                },
                headerStyle: {
                    backgroundColor: colors.primary,
                }
            }} />
        </Stack.Navigator>
    );
}
