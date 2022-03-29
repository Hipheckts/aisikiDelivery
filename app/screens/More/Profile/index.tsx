import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import { getProfile } from '../../../services/requests';

export default function Profile() {

  const { user, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  let [profileData, setProfileData] = useState(0);

  let [fontsLoaded] = useFonts({
      'Custom-Font': require('../../../assets/fonts/GTWalsheimPro-Regular.ttf'),
      'Custom-Font-Bold': require('../../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchProfile = async () => {
      const profileData = await getProfile();
      setProfileData(profileData);
      console.log(profileData);
    };
  
    useEffect(() => {
      fetchProfile();
    }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>

      </KeyboardAvoidingView>
    </ScrollView>
  );
}
