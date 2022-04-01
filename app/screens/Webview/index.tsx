import { ApiResponse } from 'apisauce';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Text, Modal, Pressable, View } from 'react-native';
import WebView from 'react-native-webview';
import AppText from '../../components/AppText';
import url from '../../config/url';
import useApi from '../../hooks/useApi';
import styles from '../ViewDeliveryScreen/styles';
import api from './api';
import WebviewProps from './model';



export default function Webview({ route, navigation }: WebviewProps) {
    const [currentUrl, setCurrentUrl] = useState('');
    const getPaymentLinkApi = useApi(api.getPayment);
    const [modalVisible, setModalVisible] = useState(false);

    const data : any = route.params
    console.log(data);

    const wvRef = useRef();

    const getPayment = async () => {
        const result: ApiResponse<any> = await getPaymentLinkApi.request(data.array, data.ref);
        console.log('status');
        // console.log(result.data['status']);
        if (result.data['status'] === 'success') {
          navigation.navigate('Success');
        } else {
          return;
        }
      }

    // listen for url changes and trigger an action on certain endpoint
    useEffect(() => {
        // if (currentUrl.match(/\/my-target-endpoint\//)) {
        // console.log(currentUrl);
        // }
        // console.log(currentUrl);
        if(data.ref != null ){
          getPayment();
        }else{
          console.log(currentUrl);
          if ( currentUrl == 'https://aisiki-feb13-4219642.dev.odoo.com/my') {
            navigation.navigate('Login');
          }
        }
    });

    return (
        <>
        <WebView
            ref={wvRef}
            source={{ uri: data.url }}
            onNavigationStateChange={(navState) => {
                setCurrentUrl(navState.url);
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false} />
      <View style={{}}>
        {/* <Modal
          animationType="slide"
          transparent={true}
          // visible={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Payment was Successful!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Orders');
                }}>
                <Text style={styles.textStyle}>Go to Orders</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}
      </View>
        </>
    );
}