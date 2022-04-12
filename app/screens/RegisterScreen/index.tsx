import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { ApiResponse } from 'apisauce';

import {
    Form,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../components/forms';
import Screen from '../../components/Screen';
import validationSchema from './validationSchema';
import UserCredentials from './model';
import RegisterProps from './model';
import styles from './styles';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import authApi from './api';
import * as Location from "expo-location";
import useLocation from '../../hooks/useLocation';
import { ScrollView } from 'react-native-gesture-handler';
import url from '../../config/url';
import axios from 'axios';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';

export default function RegisterScreen({ navigation }: RegisterProps) {
    const registerApi = useApi(authApi.register);
    const [registerFailed, setregisterFailed] = useState(false);
    const [error, setError] = useState("");

    const location = useLocation();

    const lat = location.latitude
    const long = location.longitude


    const [open, setOpen] = useState(false);
    const [city, setValue] = useState("Select City");
    const [items, setItems] = useState([
        {label: 'Select City', value: "Select City"},
        {label: 'Benin', value: "Benin"},
        {label: 'Lagos', value: "Lagos"},
        {label: 'Abuja', value: "Abuja"},
        {label: 'Kano', value: "Kano"},
    ]);


    const handleSubmit = async ({ first_name, last_name, phone, email, password, toc = true, referral_code, origin = "DELIVERYAPP" }: any) => {
        // navigation.navigate('OTPScreen', {phone: phone});
        console.log("registering....");
        try {
        const result: ApiResponse<any> = await registerApi.request(
            first_name,
            phone,
            email,
            password,
            last_name,
            referral_code != null ? referral_code : "null",
            toc,
            city,
            origin
            // location.latitude,
            // location.longitude,
        );
        console.log(result.data);
        if (result.status === 200) {
            setregisterFailed(false);
            // await otpApi.request(phone);
            // console.log(result.data);
            navigation.navigate('OTPScreen', { phone: phone });
            // login(result.data);

        } else {
            setregisterFailed(true);
            setError(result.data.message);
            return;
        }
            }
            catch (error) {
                setregisterFailed(true);
            }
        
    }

    // const handleSubmit = async ({ name, phone, referral_code, password, number_of_offices, logo, contact_person }: UserCredentials) => {

    //     try {
    //       const response = await axios.post(`${url.baseUrl}/register`, {

    //         lat,
    //         long,
    //         business_category: "1",
    //         phone,
    //         password,
    //         name,
    //         login: phone,
    //         referral_code,
    //         logo,
    //         is_corporate: false,
    //         number_of_offices,
    //         contact_person
    //       });

    //       console.log(response.status);

    //       if (response.status === 200) {
    //         setregisterFailed(false);
    //         console.log(response.data);
    //         // navigation.navigate('Login');
    //         // login(response.data);

    //     } else {
    //         setregisterFailed(true);
    //         return;
    //     }
    //     } catch (error) {
    //         console.log(error);
    //         setregisterFailed(true);
    //     }
    // }

    return (
        <>
            <ActivityIndicator
                // visible={false}
                visible={registerApi.loading}
            />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            >
                <Form
                    initialValues={{ phone: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    >
                    <ScrollView style={styles.container}>
                        {/* <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.logo}
                        /> */}
                        <ErrorMessage
                            error="Invalid email and/or password"
                            visible={registerFailed}
                        />
                        <View style={{
                            margin: 10
                        }}></View>
                        {/* <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="map"
                            name="city"
                            placeholder="City"
                        /> */}

                    <DropDownPicker
                        style={{
                            borderRadius: 10,
                            flexDirection: 'row',
                            paddingLeft: 20,
                            borderWidth: 0,
                            marginTop: 10
                        }}
                        open={open}
                        value={city}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        />
                        <View style={{
                            margin: 5
                        }}></View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            name="first_name"
                            placeholder="Firstname"
                        />
                        <View style={{
                            margin: 5
                        }}></View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            name="last_name"
                            placeholder="Lastname"
                        />
                        <View style={{
                            margin: 5
                        }}>
                        </View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="mail"
                            name="email"
                            placeholder="Email"
                        />
                        <View style={{
                            margin: 5
                        }}>
                        </View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="phone"
                            name="phone"
                            placeholder="Phone Number"
                            textContentType="telephoneNumber"
                        />
                        <View style={{
                            margin: 5
                        }}>
                        </View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />

                    </ScrollView>
                    <SubmitButton title="Register" />
                    <View style={{
                        margin: 20
                    }}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ alignSelf: 'center' }}>Already Have Account? Login</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
        </>
    );
}
