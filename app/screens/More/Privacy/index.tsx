import React from 'react';
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import styles from './styles';

export default function Privacy() {

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
                <Text style={styles.title}>About Aisiki</Text>
                <Text style={styles.text}>SmartAgro Technologies Limited, a company incorporated under the laws of the Federal Republic of Nigeria, having its office at 100, Textile Mill, Road, Benin City, Nigeria. As a part of its objectives, created a mobile application and website that facilitates it users registered on the Aisiki Platform, to buy fresh farm produce across cities in Nigeria.</Text>
                <Text style={styles.title}>What is this Privacy Policy</Text>
                <Text style={styles.text}>This privacy policy describes how and why the Aisiki Platform collects, uses and discloses the information provided by the users. All users shall be bound by this Privacy Policy and the Aisiki Platform shall not use any information supplied by customers except in accordance with this Privacy Policy. In order to use and access the Aisiki Platform, it is necessary for the users to agree to and accept the terms and conditions provided for under this Privacy Policy along with the terms of use. The users who do not agree with the terms set out in this Privacy Policy and the terms of use are advised to refrain from accepting them and are advised to refrain from using any Services. The users visit to and/or use of the Aisiki Platform and any dispute over privacy is subject to this Privacy Policy and the terms of use.</Text>
            </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
