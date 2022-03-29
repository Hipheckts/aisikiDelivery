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

import { getBalance, getDeliveries } from '../../services/requests';
import NumberFormat from 'react-number-format';
import Carousel from 'react-native-reanimated-carousel';
import url from '../../config/url';

export default function Dashboard({ navigation }: DashboardProps) {
  let { user, logout } = useAuthContext();
  let [deliveriesList, setDeliveriesList] = useState(Array());
  let [walletBalance, setWalletBalance] = useState(0);
  const [period, setPeriod] = useState('today');

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchDeliveries = async () => {
    // setLoading(true);
    const deliveriesData = await getDeliveries();
    setDeliveriesList(deliveriesData);
    console.log(deliveriesData);
    // setLoading(false);
  };

  let fetchBalance = async () => {
    const walletBalance = await getBalance();
    setWalletBalance(walletBalance['balance']);
    console.log(walletBalance['balance']);
  };

  useEffect(() => {
    // fetchDeliveries();
    // fetchBalance();
  }, []);


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}> */}
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
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
                <Text style={styles.bizCardTitle}>{period == 'today' ? 3 : period == 'week' ? 10 : 50}</Text>
                <Text style={styles.bizCardSubtitle}>Total Orders</Text>
              </View>
              <View style={styles.bizCard2}>
                <Text style={styles.salesCardTitle}>{period == 'today' ? 30 : period == 'week' ? 100 : 500}</Text>
                <Text style={styles.salesCardSubtitle}>Complete Orders</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.salesCard}>
                <Text style={styles.salesCardTitle}>{period == 'today' ? 3 : period == 'week' ? 16 : 31}</Text>
                <Text style={styles.salesCardSubtitle}>Pending</Text>
              </View>
              <View style={styles.salesCard2}>
                <Text style={styles.salesCardTitle}>{url.currencySymbol}{period == 'today' ? 300.9 : period == 'week' ? 1600.00 : 3100.00}</Text>
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
                <Pressable onPress={() => navigation.navigate('Deliveries')}>
                  <Text style={{ margin: 20, color: colors.grey }}>See All</Text>
                </Pressable>
              </View>
              {deliveriesList.length != 0 ?
                <FlatList
                  data={deliveriesList}
                  renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("ViewDeliveriesScreen", { delivery: item })} >
                      <View style={styles.vendorCard}>
                        <View>
                          <Image
                            source={{ uri: "https://techcrunch.com/wp-content/uploads/2021/03/maizemanphone.jpg" }}
                            style={styles.vendorImg}
                          />
                        </View>
                        <View style={styles.vendorDetails}>
                          <Text style={styles.vendorName}>{item.name}</Text>
                          <Text style={styles.vendorEmail}>{item.email}</Text>
                          <Text style={styles.vendorBranch}>Branch Number: BN{item.id}</Text>
                          <Text style={styles.vendorLocation}>
                            <MaterialCommunityIcons
                              color={colors.primary}
                              name="map-marker-outline"
                              size={20}
                              style={styles.menu_icon}
                            />
                            Benin City
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
      {/* </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </>
  );
}
