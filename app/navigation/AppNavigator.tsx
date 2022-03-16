import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

import Dashboard from '../screens/DashboardScreen';
import Orders from '../screens/OrdersScreen';
import Cart from '../screens/CartScreen';
import Store from '../screens/StoreScreen';
import More from '../screens/MoreScreen';
import NewListingButton from './NewListingButton';
// import useNotifications from '../hooks/useNotifications';

interface TabBarIconProps {
    color: string;
    size: number;
}

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
});

export default function AppNavigator() {
    // useNotifications();

    return (
        <Tab.Navigator>
        {/* <Tab.Screen
            component={Dashboard}
            name="ListingEdit"
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton
                        onPress={() => navigation.navigate('ListingEdit')}
                    />
                ),
                headerShown:false,
                tabBarIcon: ({ color, size }: TabBarIconProps) => (
                    <MaterialCommunityIcons
                        color={color}
                        name="plus-circle"
                        size={size}
                    />
                )
            })}
        /> */}
            <Tab.Screen
                component={Dashboard}
                name="Home"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="home"
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                component={Store}
                name="Store"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="store"
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                component={Orders}
                name="Orders"
                options={{
                    // headerShown:false,
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="order-bool-ascending"
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                component={Cart}
                name="Cart"
                options={{
                    // headerShown:false,
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="cart"
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                component={More}
                name="More"
                options={{
                    // headerShown:false,
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="dots-horizontal"
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
