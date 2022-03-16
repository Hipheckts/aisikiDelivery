import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F8F9FD'
    },
    logo: {
        width: 80,
        height: 128,
        // marginBottom: Dimensions.get('window').height * 0.05,
    },
    title: {
        fontFamily:'Custom-Font-Bold',
        fontWeight: 'bold',
        paddingTop: 40,
        textTransform: 'capitalize',
        fontSize: 22
    },
    subtitle: {
        fontFamily:'Custom-Font',
        paddingTop: 20,
        fontSize: 14,
    },
    riderImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        marginBottom: 10
    },
    vSpace: {
        marginTop: 20
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
