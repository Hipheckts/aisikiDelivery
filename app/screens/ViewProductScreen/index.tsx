import React, { useState } from 'react';
import { View, Image, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable, Modal } from 'react-native';

import ViewProductProps from './model';
import styles from './styles';
import colors from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../../components/AppButton';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import api from './api';
import ProductData from './model';
import { ApiResponse } from 'apisauce';

export default function ViewProduct({ route, navigation }: ViewProductProps) {
  const addtoCartApi = useApi(api.addToCart);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { product } = route.params;

  const addtoCart = async () => {
    const result: ApiResponse<any> = await addtoCartApi.request("1", "0", product.id, product.lst_price, product.name);
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
        visible={addtoCartApi.loading}
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
              <Text style={styles.modalText}>Product Succesfully Added to Cart!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Cart');
                }}>
                <Text style={styles.textStyle}>View Cart</Text>
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
          {/* {Platform.OS == 'ios' ? <View style={styles.margin}/> : <></>} */}
          <View style={styles.productsContainer}>
            <Image
              source={{ uri: "https://aisiki-feb13-4219642.dev.odoo.com/web/image/product.template/423/image_1024" }}
              // source={{uri: product.image_url}}
              style={styles.productImg}
            />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>NGN{product.lst_price}</Text>
            <View style={styles.margin} />
            <Text style={styles.price}>TYPE: {product.aisiki_product_type}</Text>
            <Text style={styles.price}>{product.description_sale}</Text>
            <View style={styles.btnContainer}>
              <AppButton title={"Add to Cart"} onPress={() => addtoCart()} />
              {/* <AppButton title={"Add to Cart"} onPress={() => navigation.navigate('DashboardScreen')}/> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
