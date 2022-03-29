import React, { useEffect } from 'react';
import { Text, KeyboardAvoidingView, Platform, Image, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../auth/context';
import styles from './styles';
import colors from '../../config/colors';
import SuccessProps from './model';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';

export default function Success({ route, navigation }: SuccessProps) {

  const { user, logout } = useAuthContext();

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });


  useEffect(() => {
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
              <View style={styles.noOrderContainer}>
                {/* <Image
                  source={require('../../../assets/success.png')}
                  style={styles.noOrder}
                /> */}
                <LottieView
                    autoPlay = {true}
                    style={{
                      width: 500,
                      height: 500,
                    }}
                    source={require('../../../assets/success.json')}
                  />
                <Text style={styles.title}>Your order was placed successfully</Text>
                <Text style={styles.subtitle}>Thank you for your order. Your order has been placed successfully. </Text>
                <View style={styles.margin} />
                <TouchableOpacity
                    style={[{ backgroundColor: colors.primary }, styles.button]}
                    onPress={()=> navigation.navigate('Orders')}>
                    <Text style={styles.buttonText}>View Orders</Text>
                </TouchableOpacity>
              </View>
    </ScrollView>
  );
}
