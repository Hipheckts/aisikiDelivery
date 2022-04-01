import React, { useEffect, useState } from 'react';
import { Image, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import { getProfile } from '../../../services/requests';
import styles from './styles';
import AccountProps from './model';
import colors from '../../../config/colors';
import { Form, FormField, SubmitButton } from '../../../components/forms';
import useLocation from '../../../hooks/useLocation';
import axios from 'axios';
import url from '../../../config/url';
import ActivityIndicator from '../../../components/ActivityIndicator';
import LottieView from 'lottie-react-native';

export default function Profile({ route, navigation }: AccountProps) {

  const { user, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  let [profileData, setProfileData] = useState(null);
  const [updateFailed, setUpdateFailed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const location = useLocation();

  let [fontsLoaded] = useFonts({
    'Custom-Font': require('../../../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Custom-Font-Bold': require('../../../assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  let fetchProfile = async () => {
    const profileData = await getProfile();
    setProfileData(profileData);
    console.log(profileData);
  };

  useEffect(() => {
    fetchProfile();
  }, []);


  const handleSubmit = async ({ longitude, phone, street, latitude, name }: any) => {

    setLoading(true);

    try {
      const response = await axios.put(`${url.baseUrl}/updateprofile`, {
        longitude,
        phone,
        street,
        latitude,
        name,
      });

    //   console.log(response.status);

      if (response.status === 200) {
        setUpdateFailed(false);
        setLoading(false);
        setModalVisible(true);
      } else {
        setUpdateFailed(true);
        setLoading(false);
        throw new Error("An error has occurred");
      }
    } catch (error) {
    //   alert("An error has occurred");
        setUpdateFailed(true);
        setLoading(false);
    }
}

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>

        <ActivityIndicator
            visible={loading}
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
                <Text style={styles.modalText}>Profile Updated Succesfully!</Text>
                <LottieView
                      autoPlay = {true}
                      style={{
                        width: 120,
                        height: 120,
                      }}
                      source={require('../../../../assets/success.json')}
                    />
                <Pressable
                  style={[styles.modalbutton, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('Account');
                  }}>
                  <Text style={styles.textStyle}>Go to Account</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      <View style={styles.container}>
        {/* <Image source={{uri:"https://i.pinimg.com/originals/c8/3f/7e/c83f7e2c623dd570821c07a16913432a.jpg"}} style={styles.image} />
        <Text style={styles.name}>Full Name: {user.name}</Text>
        <Text style={styles.number}>Telephone: {user.username}</Text> */}
        {profileData != null ?
          <>
            <Form
              onSubmit={handleSubmit}
              initialValues={{ name: profileData.name, phone: profileData.phone, street: `${profileData.street}`, number_of_offices: profileData.number_of_offices, contact_person: profileData.contact_person, latitude: `${location.latitude}`, longitude: `${location.longitude}`, referral_code: profileData.referral_code, }}
            >
              <Text style={styles.text}>Name</Text>
              <FormField
                name="name"
                placeholder="Name"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Phone Number</Text>
              <FormField
                name="phone"
                placeholder="Phone Number"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Street</Text>
              <FormField
                name="street"
                placeholder="Street"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              {/* <Text style={styles.text}>Number of Offices</Text>
              <FormField
                name="number_of_offices"
                placeholder="Number of Offices"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Contact Person</Text>
              <FormField
                name="contact_person"
                placeholder="Contact Person"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}> 
              </View>*/}
              <Text style={styles.text}>Longitude (Current Location)</Text>
              <FormField
                name="longitude"
                placeholder="Longitude"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Latitude (Current Location)</Text>
              <FormField
                name="latitude"
                placeholder="Latitude"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <SubmitButton title="Update Profile" />
            </Form>
          </>
          : <></>
        }
      </View>
    </ScrollView>
  );
}
