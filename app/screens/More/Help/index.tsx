import React from 'react';
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import styles from './styles';
import colors from '../../../config/colors';

export default function Help() {

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
          <Text style={styles.text}>For suggestions, complaints and enquiries kindly
            reach out to us the following channel:</Text>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.text}>info@aisiki.co</Text>
          <Text style={styles.title}>Phone</Text>
          <Text style={styles.text}>+234 801 234 5678</Text>
          <Text style={styles.title}>Chat with us</Text>
          <Text style={styles.text}>
            <MaterialCommunityIcons
              color={colors.primary}
              name="whatsapp"
              size={22}
            />
            +234 801 234 5678
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
