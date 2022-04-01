import React, { useEffect, useState } from 'react';
import { Image, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthContext } from '../../../auth/context';
import { getProfile } from '../../../services/requests';
import styles from './styles';
import AccountProps from './model';
import colors from '../../../config/colors';
import { Form, FormField } from '../../../components/forms';

export default function Account({ route, navigation }: AccountProps) {

  const { user, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  let [profileData, setProfileData] = useState(null);

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Image source={{uri:"https://i.pinimg.com/originals/c8/3f/7e/c83f7e2c623dd570821c07a16913432a.jpg"}} style={styles.image} />
        <Text style={styles.name}>Full Name: {user.name}</Text>
        <Text style={styles.number}>Telephone: {user.username}</Text> */}
        {profileData != null ?
          <>
            <Form
              initialValues={{ name: profileData.name, phone: profileData.phone, street: `${profileData.street}`,number_of_offices: profileData.number_of_offices, contact_person: profileData.contact_person, latitude: `${profileData.latitude}`, longitude: `${profileData.longitude}`, referral_code: profileData.referral_code, }}
            >
              <Text style={styles.text}>Name</Text>
              <FormField
                editable={false}
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
                editable={false}
                name="phone"
                placeholder="Phone Number"
                textContentType="name"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Number of Offices</Text>
              <FormField
                editable={false}
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
                editable={false}
                name="contact_person"
                placeholder="Contact Person"
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
              <Text style={styles.text}>Longitude</Text>
              <FormField
                editable={false}
                name="longitude"
                placeholder="Longitude"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Latitude</Text>
              <FormField
                editable={false}
                name="latitude"
                placeholder="Latitude"
              />
              <View style={{
                margin: 5
              }}>
              </View>
              <Text style={styles.text}>Referral Code (Click to Copy)</Text>
              <FormField
                editable={false}
                name="referral_code"
                placeholder="Referral Code"
                textContentType="name"
              />
            </Form>

            <TouchableOpacity
              style={[{ backgroundColor: colors.primary }, styles.button]}
              onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </>
          : <></>
        }
      </View>
    </ScrollView>
  );
}
