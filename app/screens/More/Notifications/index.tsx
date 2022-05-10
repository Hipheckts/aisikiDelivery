import React from 'react';
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import styles from './styles';
import colors from '../../../config/colors';

export default function Notifications() {

  const { user, logout } = useAuthContext();

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../../assets/fonts/GTWalsheimPro-Bold.ttf'),
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
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 200}}>
            <Text style={styles.title}>No Notifications!</Text>
          </View>
          {/* <View style={styles.row}>
            <View>
              <Text style={styles.title}>New Message from Admin</Text>
              <Text style={styles.text}>For suggestions, complaints and enquiries kindly
                reach out to us the following channel:</Text>
            </View>
            <MaterialCommunityIcons
              color={colors.primary}
              name="message"
              size={32}
              style={styles.menu_icon}
            />
          </View>
          <View
            style={styles.line}
          />
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>New Message from Admin</Text>
              <Text style={styles.text}>For suggestions, complaints and enquiries kindly
                reach out to us the following channel:</Text>
            </View>
            <MaterialCommunityIcons
              color={colors.primary}
              name="message-outline"
              size={32}
              style={styles.menu_icon}
            />
          </View>
          <View
            style={styles.line}
          /> */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
