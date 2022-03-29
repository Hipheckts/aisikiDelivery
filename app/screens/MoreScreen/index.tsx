import React from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

import OfferingsProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function Offeringss({ navigation }: OfferingsProps) {

  const { user, logout } = useAuthContext();

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <StatusBar
              backgroundColor={colors.primary}
            />
            <View style={styles.container}>
              <Pressable onPress={()=>{navigation.navigate("Profile")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Edit Profile</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="pencil-outline"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={()=>{navigation.navigate("Account")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Account</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="account-outline"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={()=>{navigation.navigate("Delivery")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Delivery Address</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="home-outline"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={()=>{navigation.navigate("Notifications")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Notifications</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="bell-outline"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={()=>{navigation.navigate("Help")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Help</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="help"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={()=>{navigation.navigate("Privacy")}}>
              <View style={styles.row}>
                <Text style={styles.menu}>Privacy Policy</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="lock-outline"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
              <View
                style={styles.line}
              />
              <Pressable onPress={logout}>
              <View style={styles.row}>
                <Text style={styles.menu}>Logout</Text>
                <MaterialCommunityIcons
                      color={colors.primary}
                      name="logout"
                      size={32}
                      style={styles.menu_icon}
                    />
              </View>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
