import React, { useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable, Modal, Linking, FlatList } from 'react-native';

import ViewDeliveryProps from './model';
import styles from './styles';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../../components/AppButton';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import api from './api';
import ProductData from './model';
import { ApiResponse } from 'apisauce';
import useLocation from '../../hooks/useLocation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewDelivery({ route, navigation }: ViewDeliveryProps) {
  const endTripApi = useApi(api.endTrip);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();
  let [latitude, setLatitude] = useState(location.latitude);
  let [longitude, setLongitude] = useState(location.longitude);

  const { delivery } = route.params;

  const [mapRegion, setmapRegion] = useState({
    latitude: delivery.lat,
    longitude: delivery.lng,
    latitudeDelta: 2.0222,
    longitudeDelta: 1.4121,
    });
  
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${delivery.lat},${delivery.lng}`;
  const label = `${delivery.customer}`;
  const url : any = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  });

  console.log(delivery);

  const endTrip = async () => {
    const result: ApiResponse<any> = await endTripApi.request(delivery.id);
    if (result.status === 200) {
      console.log(result.data);
      setLoading(false);
      setModalVisible(!modalVisible);
    } else {
      setLoading(false);
      return;
    }
  }


  return (
    <ScrollView>
      <ActivityIndicator
        visible={endTripApi.loading}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          // visible={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Great Job!</Text>
              <Text style={styles.modalText}>Package Successfully Delivered</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Completed');
                }}>
                <Text style={styles.textStyle}>View Completed</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <StatusBar
          backgroundColor={colors.primary}
        />
        <View style={styles.container}>

              <MapView style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={mapRegion}  
              showsUserLocation={true}
              >
                <Marker coordinate={mapRegion} title='Marker'>
                  <Image source={require('../../../assets/rider.png')} style={{width:80}} />
                </Marker>
              </MapView>
            <View style={styles.productsContainer}>
              <Text style={styles.name}>Customer:</Text>
              <Text style={styles.price}>{delivery.customer}</Text>
              <Text style={styles.name}>Address:</Text>
              <Text style={styles.price} numberOfLines={2}>{delivery.delivery_address}</Text>
              <View style={styles.row}>
                <View>
                  <Text style={styles.name}>Telephone:</Text>
                  <Text style={styles.price}>{delivery.mobile}</Text>
                </View>
                <Pressable onPress={()=>{Linking.openURL(`tel:${delivery.mobile}`)}}>
                <MaterialCommunityIcons
                    color={colors.primary}
                    name="phone-in-talk-outline"
                    size={50}
                    style={{transform: [{rotateY: '180deg'}]}}
                  />
                  </Pressable>
              </View>
            </View>
              <Text style={styles.name}>Order Items:</Text>
              <FlatList
                data={delivery.items}
                renderItem={({ item }) => (
                <Pressable
                  // onPress={() => navigation.navigate("ViewProductScreen", { product: item })}
                >
                  <View style={styles.itemContainer}>
                    <Image
                          // source={{uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c23b.png"}}
                      source={{ uri: item.image_url }}
                      style={styles.productImg}
                    />
                    <Text style={styles.item} numberOfLines={1}>{item.description}</Text>
                    <Text style={styles.item}>QTY: {item.quantity}</Text>
                    {/* <NumberFormat style={styles.price} value={123456} displayType={'text'} thousandSeparator={true} prefix={'{url.currencySymbol}'} /> */}
                  </View>
                </Pressable>
                )}
                keyExtractor={item => item.id}
                numColumns={3} />
            <View style={styles.margin} />
            <View style={styles.btnContainer}>
              {started ? 
              <View style={{alignItems:'center'}}>
                <Text style={styles.price}>Enroute Package Delivery...</Text>
                <AppButton title={"End Trip"} color={colors.red} onPress={() =>{
                  endTrip();
                }} />
              </View> :
              <AppButton title={"Start Trip"} onPress={() =>{
                setStarted(true);
                Linking.openURL(url);
              }} />
              }
            </View>
        </View>
      </View>
    </ScrollView>
  );
}
