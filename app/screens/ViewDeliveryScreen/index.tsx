import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable, Modal, Linking, FlatList } from 'react-native';

import ViewDeliveryProps from './model';
import styles from './styles';
import colors from '../../config/colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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
  const startTripApi = useApi(api.startTrip);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
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

  const startTrip = async () => {
    const result: ApiResponse<any> = await startTripApi.request(delivery.id);
    if (result.status === 200) {
      console.log(result.data);
      setLoading(false);
      Linking.openURL(url);
      setStarted(true);
    } else {
      setLoading(false);
      return;
    }
  }

  const endTrip = async () => {
    setModalVisible(!modalVisible);
    setLoading(true);
    const result: ApiResponse<any> = await endTripApi.request(delivery.id);
    if (result.status === 200) {
      console.log(result.data);
      setLoading(false);
      navigation.navigate('Completed');
    } else {
      setLoading(false);
      return;
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(delivery.delivery_status == 'in_transit'){
        setStarted(true);
      }

      if(delivery.delivery_status == 'completed'){
        setCompleted(true);
      }

    });

    return unsubscribe;
  }, [navigation]);



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
              <Text style={styles.modalAmount}>₦{delivery.amount_to_collect}</Text>
              <Text style={styles.statusText}>Status: {delivery.payment_status}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  endTrip();
                }}>
                {delivery.payment_status == 'not paid' ?
                <Text style={styles.textStyle}>Mark as Paid & Delivered</Text>
                :
                <Text style={styles.textStyle}>Mark as Delivered</Text>
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: colors.black, marginTop: 20, fontSize: 18}}>Close</Text>
              </TouchableOpacity>
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
              <Text style={styles.name}>Order Date: {delivery.create_date.split(' ')[0]}</Text>
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
            {!completed ? 
            <View style={styles.btnContainer}>
              {started ? 
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{
                  Linking.openURL(url);
                }}>
                  <Text style={{color: colors.primary, fontSize: 18}}>... Enroute Delivery (Go to Map)</Text>
                </TouchableOpacity>
                <AppButton title={"End Trip"} color={colors.red} onPress={() =>{
                  // endTrip();
                  setModalVisible(!modalVisible);
                }} />
              </View> :
              <AppButton title={"Start Trip"} onPress={() =>{
                startTrip();
              }} />
              }
            </View>
            : 
            <AppButton title={"Order has been Delivered"} onPress={() =>{}} />
            }
        </View>
      </View>
    </ScrollView>
  );
}
