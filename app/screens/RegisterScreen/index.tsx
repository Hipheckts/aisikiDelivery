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

export default function RegisterScreen({ navigation }: RegisterProps) {
    const registerApi = useApi(authApi.register);
    const [registerFailed, setregisterFailed] = useState(false);

    const location = useLocation();

    const lat = location.latitude
    const long = location.longitude

    const handleSubmit = async ({ name, phone, password }: UserCredentials) => {
        // navigation.navigate('OTPScreen', {phone: phone});

        // const result: ApiResponse<any> = await registerApi.request(
        //     name,
        //     phone,
        //     password,
        //     location.latitude,
        //     location.longitude,
        // );
        // console.log(result.status);
        // if (result.status === 200) {
        //     setregisterFailed(false);
        //     // console.log(result.data);
        //     navigation.navigate('OTPScreen', { phone: phone });
        //     // login(result.data);

        // } else {
        //     setregisterFailed(true);
        //     return;
        // }


        navigation.navigate('OTPScreen', { phone: phone });
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
                    {/* <ErrorMessage
                        error="Invalid email and/or password"
                        visible={registerFailed}
                    /> */}
                    <ScrollView style={styles.container}>
                        <View style={{
                            margin: 10
                        }}></View>

                        <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.logo}
                        />
                        <View style={{
                            margin: 20
                        }}></View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="pencil"
                            name="name"
                            placeholder="Name"
                            textContentType="name"
                        />
                        <View style={{
                            margin: 5
                        }}></View>
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
                        <View style={{
                            margin: 40
                        }}></View>

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
