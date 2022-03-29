import React, { useEffect, useState } from 'react';
import { Image, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import { getProfile } from '../../../services/requests';
import styles from './styles';
import AccountProps from './model';
import colors from '../../../config/colors';

export default function Account({ route, navigation }: AccountProps) {

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
      console.log(profileData.name);
    };
  
    useEffect(() => {
      fetchProfile();
    }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri:"https://i.pinimg.com/originals/c8/3f/7e/c83f7e2c623dd570821c07a16913432a.jpg"}} style={styles.image} />
        <Text style={styles.name}>Full Name: {user.name}</Text>
        <Text style={styles.number}>Telephone: {user.username}</Text>
        <TouchableOpacity
            style={[{ backgroundColor: colors.primary }, styles.button]}
            onPress={()=> navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
