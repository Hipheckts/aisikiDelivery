import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal, Pressable } from 'react-native';
import { ApiResponse } from 'apisauce';

import {
    Form,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../components/forms';
import validationSchema from './validationSchema';
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
import ForgotPasswordProps from './model';

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordProps) {
    const forgotApi = useApi(authApi.forgot);
    const [forgotFailed, setForgotFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = async () => {

        setModalVisible(!modalVisible);

        // console.log(phone);

        // const result: ApiResponse<any> = await forgotApi.request(
        //     phone,
        //     password
        // );
        // console.log(result.status);

        // if (result.status === 200) {
        //     setForgotFailed(false);
        //     forgot(result.data);

        // } else {
        //     setForgotFailed(true);
        //     return;
        // }
    }

    return (
        <>  
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
                            <Text style={styles.modalText}>Reset Code Sent Successfully!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Login');
                                }}>
                                <Text style={styles.textStyle}>Proceed to Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <ActivityIndicator
                visible={forgotApi.loading}
            />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            >
                <Form
                    initialValues={{ email: '' }}
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
                        <Text style={styles.subtitle}>A reset instruction will be sent to your
                            email address</Text>
                        <View style={{
                            margin: 20
                        }}></View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            name="email"
                            placeholder="Enter Account Email"
                            textContentType="emailAddress"
                        />
                        <View style={{
                            margin: 20
                        }}></View>

                    </ScrollView>
                    <SubmitButton title="Reset Password" />
                    <View style={{
                        margin: 20
                    }}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ alignSelf: 'center' }}>Return to Login</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
        </>
    );
}
