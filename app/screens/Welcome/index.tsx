import React from 'react';
import { ImageBackground, View, Image, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native';

import AppButton from '../../components/AppButton';
import WelcomeProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../../config/colors';

export default function Welcome({ navigation }: WelcomeProps) {

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.background}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Aisiki Delivery</Text>
      <Text style={styles.subtitle}>Everything Fresh from Farm</Text>
      <Image
        source={require('../../../assets/courier.png')}
        style={styles.riderImg}
      />
       
       <TouchableOpacity
            style={[{ backgroundColor: colors.secondary }, styles.button]}
            onPress={()=> navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.vSpace}/>
    </View>
  );
}
