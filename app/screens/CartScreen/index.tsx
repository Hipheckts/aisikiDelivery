import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable } from 'react-native';

import CartProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import colors from '../../config/colors';
import { getCartItems, getProducts } from '../../services/requests';

export default function Cart({ navigation }: CartProps) {

  const { user, logout } = useAuthContext();
  let [productsList, setCartsList] = useState(null);

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchCartItems = async () => {
    // setLoading(true);
    const cartsData = await getCartItems();
    setCartsList(cartsData['data']);
    console.log(cartsData['data']);
    // setLoading(false);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);


  if (!productsList) {
    return <AppLoading />;
  }

  return (
  <KeyboardAvoidingView
    style={{ flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <StatusBar
        backgroundColor={colors.primary}
      />
      <View style={styles.container}>
      {Platform.OS == 'ios' ? <View style={styles.margin}/> : <></>}
      <View style={styles.productsContainer}>
                  <FlatList
                    data={productsList}
                    renderItem={({ item }) => (
                      <Pressable
                      onPress={() => navigation.navigate("ViewProductScreen", {product: item})}
                    >
                      <View style={styles.itemContainer}>
                         <Image  
                          source={{uri: "https://aisiki-feb13-4219642.dev.odoo.com/web/image/product.template/423/image_1024"}}
                          // source={{uri: item.image_url}}
                          style={styles.productImg}
                        />
                        <Text style={styles.item}>{item.name}</Text>
                        <Text style={styles.price}>NGN{item.lst_price}</Text>
                      </View>
                    </Pressable>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2} />
                </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
