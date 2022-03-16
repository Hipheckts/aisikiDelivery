import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
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
import LoginProps from './model';
import styles from './styles';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import authApi from './api';
import colors from '../../config/colors';
import OutlineButton from '../../components/OutlineButton';
import url from '../../config/url';
import axios from 'axios';
import AppNavigator from '../../navigation/AppNavigator';
import { useAuthContext } from '../../auth/context';

export default function LoginScreen({ navigation }: LoginProps) {
    const loginApi = useApi(authApi.login);
    const [loginFailed, setLoginFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuthContext();

    const handleSubmit = async ({ phone, password }: UserCredentials) => {

        navigation.navigate('Dashboard');
        
        // console.log(phone);

        // const result: ApiResponse<any> = await loginApi.request(
        //     phone,
        //     password
        // );
        // console.log(result.status);
        
        // if (result.status === 200) {
        //     setLoginFailed(false);
        //     login(result.data);

        // } else {
        //     setLoginFailed(true);
        //     return;
        // }
    }

    // const handleSubmit = async ({ phone, password }: UserCredentials) => {

    //     setLoading(true);

    //     try {
    //       const response = await axios.post(`${url.baseUrl}/login`, {
    //         phone,
    //         password
    //       });

    //       console.log(response.status);

    //       if (response.status === 200) {
    //         alert(` You have created: ${JSON.stringify(response.data)}`);
    //         setLoginFailed(false);
    //       } else {
    //         throw new Error("An error has occurred");
    //       }
    //     } catch (error) {
    //       alert("An error has occurred");
    //       setLoginFailed(true);
    //     }
    // }

    return (
        <>
            <ActivityIndicator
                visible={loginApi.loading}
            />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            >
                <Form
                    initialValues={{ phone: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
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
                    <SubmitButton title="Login" />
                    <View style={{
                        margin: 20
                    }}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={{ alignSelf: 'center' }}>Don't Have Account? Register</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
        </>
    );
}
