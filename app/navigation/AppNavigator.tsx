import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

import Dashboard from '../screens/DashboardScreen';
import Ongoing from '../screens/OngoingScreen';
import Completed from '../screens/CompletedScreen';
import New from '../screens/NewScreen';
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
                    tabBarIcon: ({size,focused}) => {
                        return (
                          <Image
                            style={{ width: size, height: size }}
                            source={focused ? require('../../assets/nav/home_a.png') : require('../../assets/nav/home.png')}
                          />
                        );
                    }
                }}
            />
            <Tab.Screen
                component={New}
                name="Assigned"
                options={{
                    // headerShown:false,
                    // title: 'New Deliveries',
                    tabBarIcon: ({size,focused}) => {
                        return (
                          <Image
                            style={{ width: size+10, height: size }}
                            source={focused ? require('../../assets/nav/new_a.png') : require('../../assets/nav/new.png')}
                          />
                        );
                    }
                }}
            />
            <Tab.Screen
                component={Ongoing}
                name="Ongoing"
                options={{
                    // headerShown:false,
                    // title: 'Ongoing Deliveries',
                    tabBarIcon: ({size,focused}) => {
                        return (
                          <Image
                            style={{ width: size+10, height: size }}
                            source={focused ? require('../../assets/nav/ongoing_a.png') : require('../../assets/nav/ongoing.png')}
                          />
                        );
                    }
                }}
            />
            <Tab.Screen
                component={Completed}
                name="Completed"
                options={{
                    // headerShown:false,
                    // title: 'Completed Deliveries',
                    tabBarIcon: ({size,focused}) => {
                        return (
                          <Image
                            style={{ width: size+10, height: size }}
                            source={focused ? require('../../assets/nav/completed_a.png') : require('../../assets/nav/completed.png')}
                          />
                        );
                    }
                }}
            />
            <Tab.Screen
                component={More}
                name="More"
                options={{
                    // headerShown:false,
                    tabBarIcon: ({size,focused}) => {
                        return (
                          <Image
                            style={{ width: size, height: size }}
                            source={focused ? require('../../assets/nav/more_a.png') : require('../../assets/nav/more.png')}
                          />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
}
