import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable, RefreshControl } from 'react-native';

import OrderProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { getIncompletedDeliveries } from '../../services/requests';
import url from '../../config/url';

export default function Orders({ navigation }: OrderProps) {
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuthContext();
  let [deliveriesList, setDeliveriesList] = useState(Array());
  const [period, setPeriod] = useState('today');

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchDeliveries = async () => {
    setLoading(true);
    const deliveriesData = await getIncompletedDeliveries("80","0");
    setDeliveriesList(deliveriesData);
    console.log(deliveriesData);
    if(deliveriesData.length != 0){
    setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeliveries();
  }, []);


  // if (!deliveriesList) {
  //   return <AppLoading />;
  // }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.container}>
            {Platform.OS == 'ios' ? <View style={styles.margin} /> : <></>}
            <View style={styles.productsContainer}>  
            {!loading ?
                <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={loading}
                    onRefresh={fetchDeliveries}
                  />
                }
                data={deliveriesList}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("ViewDeliveryScreen", { delivery: item })} >
                    <View style={styles.vendorCard}>
                      <View>
                        <Image
                          source={require('../../../assets/courier.png')}
                          style={styles.vendorImg}
                        />
                      </View>
                      <View style={styles.vendorDetails}>
                        <Text style={styles.vendorName}>{item.customer}</Text>
                        <Text style={styles.vendorEmail}>{item.email}</Text>
                        <Text numberOfLines={1} style={styles.vendorLocation}>
                          <MaterialCommunityIcons
                            color={colors.primary}
                            name="map-marker-outline"
                            size={20}
                            style={styles.menu_icon}
                          />
                          {item.delivery_address}
                        </Text>
                      </View>
                    </View>
                  </Pressable>

                  )}
                  keyExtractor={item => item.id}
                  numColumns={2} />
                  :
                  <View style={styles.noOrderContainer}>
                    <Image  
                            source={require('../../assets/noorder.png')}
                            style={styles.noOrder}
                          />
                          <Text style={styles.title}>No Ongoing Deliveries</Text>
                          <Text style={styles.subtitle}>Start a Delivery Now!</Text>
                  </View>
                }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
