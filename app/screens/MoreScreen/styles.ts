import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        margin: 10
    },
    menu:{
        fontSize: 20,
        margin: 15
    },
    line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu_icon:{
        marginTop: 10,
        marginRight: 10
    }
});

export default styles;
