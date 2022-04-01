import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './AppNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import ViewDeliveryScreen from '../screens/ViewDeliveryScreen';
import colors from '../config/colors';
import Notifications from '../screens/More/Notifications';
import Help from '../screens/More/Help';
import Delivery from '../screens/More/Delivery';
import Account from '../screens/More/Account';
import Profile from '../screens/More/Profile';
import Privacy from '../screens/More/Privacy';
import Webview from '../screens/Webview';
import Success from '../screens/Success';

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
            <Stack.Screen component={ViewDeliveryScreen} name="ViewDeliveryScreen" options={{
                headerShown: true, title: 'View Delivery',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />

            <Stack.Screen component={Webview} name="Webview" options={{
                headerShown: true, title: 'Checkout',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />

            {/* More */}
            <Stack.Screen component={Privacy} name="Privacy" options={{
                headerShown: true, title: 'Privacy Policy',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Help} name="Help" options={{
                headerShown: true, title: 'Help',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Notifications} name="Notifications" options={{
                headerShown: true, title: 'Notifications',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Delivery} name="Delivery" options={{
                headerShown: true, title: 'Delivery Address',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Account} name="Account" options={{
                headerShown: true, title: 'Account',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Profile} name="Profile" options={{
                headerShown: true, title: 'Edit Profile',
                headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerBackTitleStyle: {
                //     color: colors.white,
                // },
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
            <Stack.Screen component={Success} name="Success" options={{
                headerShown: false,
                // headerShown: true, title: 'Store',
                // headerBackTitle: 'Back', headerTitleAlign: 'center',
                // headerTintColor: colors.white,
                // headerTitleStyle: {
                //     color: colors.white,
                // },
                // headerStyle: {
                //     backgroundColor: colors.primary,
                // }
            }} />
        </Stack.Navigator>
    );
}
