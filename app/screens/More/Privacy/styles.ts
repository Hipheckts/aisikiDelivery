import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    title: {
        color: colors.primary,
        fontSize: 20
    },
    text: {
        marginTop: 10,
        marginBottom: 50,
        color: colors.grey,
        fontSize: 14,
        lineHeight: 24
    },
});

export default styles;
