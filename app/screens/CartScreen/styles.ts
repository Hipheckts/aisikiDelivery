import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns - 25
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    margin: {
        marginTop: 50
    },
    productsContainer: {
        margin: 5,
    },
    itemContainer: {
        width: size,
        height: size,
        backgroundColor: colors.white,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        margin: 10,
        padding: 10,
        borderRadius: 15
    },
    item: {
        margin: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        color: colors.primary
    },
    price: {
        marginLeft: 5,
        fontSize: 12
    },
    productImg: {
        width: size,
        height: size * 0.7
    }
});

export default styles;
