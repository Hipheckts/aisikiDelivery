import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList, Pressable } from 'react-native';

import StoreProps from './model';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../auth/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { getProducts } from '../../services/requests';

export default function Store({ navigation }: StoreProps) {

  const { user, logout } = useAuthContext();
  let [productsList, setProductsList] = useState(null);

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchProducts = async () => {
    // setLoading(true);
    const productsData = await getProducts("", "0");
    setProductsList(productsData['data']);
    console.log(productsData['data']);
    // setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
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
                        {/* <NumberFormat style={styles.price} value={123456} displayType={'text'} thousandSeparator={true} prefix={'NGN'} /> */}
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
