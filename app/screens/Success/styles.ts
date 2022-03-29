import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns - 25
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    margin: {
        marginTop: 20
    },
    noOrderContainer:{
        margin: 20,
        marginTop:  Dimensions.get('window').height * 0.01,
        alignItems: 'center'
    },
    noOrder: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        alignSelf:'center'
    },
    title: {
        fontFamily:'Custom-Font-Bold',
        fontWeight: 'bold',
        // paddingTop: 40,
        textTransform: 'capitalize',
        fontSize: 22,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily:'Custom-Font',
        paddingTop: 20,
        fontSize: 14,
        textAlign: 'center',
        color: colors.grey
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 50,
        // borderTopLeftRadius: 10,
        // borderBottomRightRadius: 10,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
        marginTop: 10
    },
    buttonText: {
        fontFamily:'Custom-Font-Bold',
        color: colors.white    
    }
});

export default styles;
