import { Dimensions, StyleSheet, Platform } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
    container:{
        margin: 20,
        // alignItems: 'center',
    },
    image:{
        width: 160,
        height: 160,
        borderRadius: 500,
        margin: 40,
        borderColor: colors.lightBlue,
        borderWidth: 3,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.1,
        elevation: Platform.OS === 'ios' ? null : 4,
        shadowRadius: 10,
    },
    text:{
        fontFamily:'Custom-Font',
        margin:0,
        padding:0
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    number:{
        fontSize: 20,
        fontWeight: '400',
        margin: 10
    },
    button: {
        // width: '60%',
        height: 50,
        borderRadius: 50,
        // borderTopLeftRadius: 10,
        // borderBottomRightRadius: 10,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
        marginTop: 20
    },
    buttonText: {
        fontFamily:'Custom-Font-Bold',
        color: colors.white    
    }
});

export default styles;
