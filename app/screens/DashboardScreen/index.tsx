import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable, Dimensions, TouchableOpacity } from 'react-native';

import DashboardProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

import { getProducts } from '../../services/requests';
import NumberFormat from 'react-number-format';
import Carousel from 'react-native-reanimated-carousel';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useLocation from '../../hooks/useLocation';

export default function Dashboard({ navigation }: DashboardProps) {
  let { user, logout } = useAuthContext();

  const location = useLocation();
  
  const [mapRegion, setmapRegion] = useState({
    latitude: 9.146851782,
    longitude: 7.33799627,
    latitudeDelta: 5.3922,
    longitudeDelta: 4.2421,
    });

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  // let setData = async () => {
  //   setmapRegion({
  //     latitude: location.latitude,
  //     longitude: location.longitude,
  //     latitudeDelta: 0.0322,
  //     longitudeDelta: 0.0121});
  // };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //   setData();
  //   console.log(location.latitude);
  //   }, 4000);
  // }, []);


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View>
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            {/* <MapView style={styles.map}/> */}
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={mapRegion}  
            showsUserLocation={true}
            >
              <Marker coordinate={mapRegion} title='Marker'>
                <Image source={require('../../../assets/rider.png')} style={{width:80}} />
              </Marker>
            </MapView>
          </View>
          <View style={styles.topContainer}>
            <View style={styles.row}>
              <View>
                <Text style={styles.statusText} >You are Offline!</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={[{ backgroundColor: colors.secondary }, styles.button]}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.buttonText}>GO ONLINE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
