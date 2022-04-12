import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { ApiResponse } from 'apisauce';

import {
    Form,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../components/forms';
import Screen from '../../components/Screen';
import UserCredentials from './model';
import styles from './styles';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import authApi from './api';
import { useAuthContext } from '../../auth/context';
import validationSchema from './validationSchema';
import OTPProps from './model';
import colors from '../../config/colors';

export default function OTPScreen({ route, navigation }: OTPProps) {
    let { user, logout } = useAuthContext();
    const otpApi = useApi(authApi.otp);
    const verifyApi = useApi(authApi.verify);
    const [verifyFailed, setVerifyFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuthContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [resend, setResend] = useState(false);

    const { phone } = route.params;

    const sendOtp = async () => {
        let res = await otpApi.request(phone);
        console.log(res.data);
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          sendOtp();
        });
    
        return unsubscribe;
      }, [navigation]);
    

    const handleSubmit = async (otpObject: any) => {

        setLoading(true);

        const otp = otpObject.otp

        try {
        const result: ApiResponse<any> = await verifyApi.request(
            phone,
            otp
        );

            // const result = await axios.post(`${url.baseUrl}/otpverify`, {
            //     "phone" : phone.phone,
            //     "otp" : otpObject.otp
            // });

            console.log(result.status);

            if (result.status === 200) {
                setLoading(false);
                setVerifyFailed(false);
                setModalVisible(!modalVisible);
                // login(result.data);

            } else {
                setLoading(false);
                setVerifyFailed(true);
                return;
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setVerifyFailed(false);
        }
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
                            <Text style={styles.modalText}>Account Verified Successfully!</Text>
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
            <>
            <ActivityIndicator
                visible={verifyApi.loading}
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
                            margin: 50
                        }}></View>
                        <Text style={styles.subtitle}>Enter verification code sent to the number {phone}</Text>
                        <View style={{
                            margin: 10
                        }}></View>
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            // icon="phone"
                            name="pin"
                            placeholder="Enter Verification Code"
                        />
                        <View style={{
                            margin: 40
                        }}></View>

                    </ScrollView>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>0:20 min</Text>
                        { !resend ? 
                    <TouchableOpacity
                        onPress={async () => {
                            setResend(true);
                            sendOtp();
                        }}>
                        <Text style={{ color: colors.secondary, fontSize: 18 }}>RESEND</Text>
                    </TouchableOpacity>
                    : 
                    <Text style={{ color: colors.red, fontSize: 18 }}>SENT!</Text>
                    }
                    </View>
                    <SubmitButton title="Verify" />
                    <View style={{
                        margin: 20
                    }}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ alignSelf: 'center' }}>Return to Sign In</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
            </>
        </>
    );
}
