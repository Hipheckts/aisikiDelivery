import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

import DashboardProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

import { getDeliveryMetrics, getDeliveries } from '../../services/requests';
import NumberFormat from 'react-number-format';
import Carousel from 'react-native-reanimated-carousel';
import url from '../../config/url';

export default function Dashboard({ navigation }: DashboardProps) {
  let { user, logout } = useAuthContext();
  let [deliveriesList, setDeliveriesList] = useState(Array());
  let [walletBalance, setWalletBalance] = useState(0);
  let [loading, setLoading] = useState(false);
  let [metricsData, setMetrics] = useState(Array());
  const [period, setPeriod] = useState('today');

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchDeliveries = async () => {
    setLoading(true);
    const deliveriesData = await getDeliveries("80","0");
    setDeliveriesList(deliveriesData);
    console.log(deliveriesData);
    if(deliveriesData.length != 0){
    setLoading(false);
    }
  };

  let fetchBalance = async () => {
    const walletBalance = await getBalance();
    setWalletBalance(walletBalance['balance']);
    console.log(walletBalance['balance']);
  };
  

  let getMetrics = async () => {
    const metrics = await getDeliveryMetrics();
    setMetrics(metrics);
    console.log(metrics);
  };


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDeliveries();
      getMetrics();
    });

    return unsubscribe;
  }, [navigation]);


 
  if (metricsData.length == 0 || metricsData == null) {
    return(
      <View>
        <StatusBar
          backgroundColor={colors.primary}
        />
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.navRow}>
              <View>
                <Text style={styles.welcomeText} >Hello {user.name}!</Text>
                <Text style={styles.findText} >How are you today?</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  color={colors.white}
                  name="bell-outline"
                  size={25}
                  onPress={() => navigation.navigate('Notifications')}
                />
              </View>
            </View>
            <View style={{ marginLeft: 10 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() => {
                    setPeriod('today');
                  }}
                >
                  <View style={period == 'today' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>Today</Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setPeriod('week');
                  }}
                >
                  <View style={period == 'week' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>This Week</Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setPeriod('month');
                  }}
                >
                  <View style={period == 'month' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>This Month</Text>
                  </View>
                </Pressable>
              </ScrollView>
            </View>
            </View>
            </View>
            </View>
    );
  }

  return (
    <>
      <View>
        <StatusBar
          backgroundColor={colors.primary}
        />
        <View style={styles.container}>
          
    <ImageBackground
      blurRadius={3}
      source={require('../../../assets/courier.png')}
      style={styles.background}>
          <View style={styles.topContainer}>
            <View style={styles.navRow}>
              <View>
                <Text style={styles.welcomeText} >Hello {user.name}!</Text>
                <Text style={styles.findText} >How are you today?</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  color={colors.white}
                  name="bell-outline"
                  size={25}
                  onPress={() => navigation.navigate('Notifications')}
                />
              </View>
            </View>
            <View style={{ marginLeft: 10 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() => {
                    setPeriod('today');
                  }}
                >
                  <View style={period == 'today' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>Today</Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setPeriod('week');
                  }}
                >
                  <View style={period == 'week' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>This Week</Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setPeriod('month');
                  }}
                >
                  <View style={period == 'month' ? styles.periodActive : styles.period}>
                    <Text style={styles.periodTitle}>This Month</Text>
                  </View>
                </Pressable>
              </ScrollView>
            </View>
            <View style={styles.row}>
              <View style={styles.bizCard}>
                <Text style={styles.bizCardTitle}>{period == 'today' ? metricsData['today'][0]['number_of_orders'] : period == 'week' ? metricsData['weekly'][0]['number_of_orders'] : metricsData['monthly'][0]['number_of_orders']}</Text>
                <Text style={styles.bizCardSubtitle}>Total Orders</Text>
              </View>
              <View style={styles.bizCard2}>
                <Text style={styles.salesCardTitle}>{period == 'today' ? metricsData['today'][0]['number_of_completed_orders'] : period == 'week' ? metricsData['weekly'][0]['number_of_completed_orders'] : metricsData['monthly'][0]['number_of_completed_orders']}</Text>
                <Text style={styles.salesCardSubtitle}>Complete Orders</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.salesCard}>
                <Text style={styles.salesCardTitle}>{period == 'today' ? metricsData['today'][0]['number_of_incomplete_orders'] : period == 'week' ? metricsData['weekly'][0]['number_of_incomplete_orders'] : metricsData['monthly'][0]['number_of_incomplete_orders']}</Text>
                <Text style={styles.salesCardSubtitle}>Pending</Text>
              </View>
              <View style={styles.salesCard2}>
                <Text style={styles.salesCardTitle}>{url.currencySymbol}{period == 'today' ? metricsData['today'][0]['amount_of_money_to_collect'] : period == 'week' ?  metricsData['weekly'][0]['amount_of_money_to_collect'] :  metricsData['monthly'][0]['amount_of_money_to_collect']}</Text>
                <Text style={styles.salesCardSubtitle}>Cash Payments</Text>
              </View>
            </View>
          </View>
          </ImageBackground>
          <View style={styles.lowerContainer}>
            <View style={styles.productsContainer}>
              <View style={{ alignItems: 'center' }}>
              </View>
              <View style={styles.row}>
                <Text style={{ margin: 20, fontWeight: 'bold' }}>New Deliveries</Text>
                <Pressable onPress={() => navigation.navigate('New')}>
                  <Text style={{ margin: 20, color: colors.grey }}>See All</Text>
                </Pressable>
              </View>
              {!loading ?
                <FlatList
                  data={deliveriesList}
                  renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("ViewDeliveryScreen", { delivery: item })} >
                      <View style={styles.vendorCard}>
                        
                      <Image
                          source={require('../../../assets/courier.png')}
                          style={styles.vendorImg}
                        />
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
                  numColumns={2}
                  initialNumToRender={2}
                />

                :
                <View style={styles.noOrderContainer}>
                  <Text style={styles.title}>No Deliveries</Text>
                  <Text style={styles.subtitle}>Your new delivery is on the way!</Text>
                </View>
              }
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
