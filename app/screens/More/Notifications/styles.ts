import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        margin: 10
    },
    title:{
        fontSize: 16,
        margin: 5
    },
    text:{
        fontSize: 12,
        margin: 5,
        width: Dimensions.get('window').width * 0.8
    },
    line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 5,
    marginBottom: 20
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
