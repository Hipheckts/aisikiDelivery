import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable, Dimensions, TouchableOpacity } from 'react-native';

import StoreProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

import { getProducts, getProfile } from '../../../services/requests';
import NumberFormat from 'react-number-format';
import Carousel from 'react-native-reanimated-carousel';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useLocation from '../../../hooks/useLocation';

export default function Delivery({ navigation }: StoreProps) {
  let { user, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  let [profileData, setProfileData] = useState(null);
  const location = useLocation();
  let [latitude, setLatitude] = useState(location.latitude);
  let [longitude, setLongitude] = useState(location.longitude);

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  const [mapRegion, setmapRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
    });

  
  let fetchProfile = async () => {
    const profileData = await getProfile();
    setProfileData(profileData);
    console.log(profileData);
    setLatitude(profileData.latitude);
    setLongitude(profileData.longitude);
  };

  

  useEffect(() => {
    fetchProfile();
  }, []);


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View>
          <View style={styles.mapContainer}>
            {/* <MapView style={styles.map}/> */}
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={mapRegion}  
            showsUserLocation={true}
            >
              <Marker coordinate={mapRegion} title='Marker'>
                <Image source={require('../../../../assets/rider.png')} style={{width:80}} />
              </Marker>
            </MapView>
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <View>
                <Text style={styles.statusText} >Your set address!</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={[{ backgroundColor: colors.secondary }, styles.button]}
                  onPress={() => navigation.navigate('Profile')}>
                  <Text style={styles.buttonText}>EDIT LOCATION</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
    </>
  );
}
