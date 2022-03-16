import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 70,
        // borderRadius: 50,
        // borderTopLeftRadius: 10,
        // borderBottomRightRadius: 10,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
        marginTop: 20
    },
    buttonText: {
        fontFamily:'Custom-Font-Bold',
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default styles;
