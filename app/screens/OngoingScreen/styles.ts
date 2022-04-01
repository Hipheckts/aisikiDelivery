import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns - 25
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    margin: {
        // marginTop: 50
    },
    productsContainer: {
        margin: 5,
    },
    itemContainer: {
        width: size,
        height: size,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.1,
        elevation: Platform.OS === 'ios' ? null : 4,
        shadowRadius: 10,
        margin: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: colors.white
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
        borderRadius: 10,
        width: size * 0.89,
        height: size * 0.7
    },
    inputField: {
        marginTop: 10,
        marginBottom: 20,
        margin: 10,
        height: 50,
        backgroundColor: colors.white,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: Dimensions.get('window').width*0.8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center'
    },
    filterButton:{
        marginTop: 20,
        width: 30,
        height: 30,
    },
    catItem:{
        width: Dimensions.get('window').width*0.4,
        padding: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    catTitle:{
        // fontSize: 12
    },
    title: {
        fontWeight: 'bold',
        padding: 10,
        textTransform: 'capitalize',
        fontSize: 18
    },
    noOrderContainer:{
        margin: 20,
        alignItems: 'center'
    },

    noOrder: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        alignSelf:'center'
    },
    subtitle: {
        fontFamily:'Custom-Font',
        paddingTop: 20,
        fontSize: 14,
        textAlign: 'center',
        color: colors.grey
    },
    vendorCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // height: 120,
        backgroundColor: colors.white,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: Platform.OS === 'ios' ? null : 4,
        margin: 10,
        marginBottom: 20,
        borderRadius: 15,
    },
    vendorImg:{
        height: 130,
        width: 130,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    vendorDetails:{
        width:'65%',
        padding: 10
    },
    vendorName:{
        fontSize: 18,
        color: colors.secondary,
        fontWeight: '600'
    },
    vendorEmail:{
        fontSize: 14,
        color: colors.secondary,
        marginTop: 5
    },
    vendorBranch:{
        fontSize: 14,
        color: colors.grey,
        marginTop: 5
    },
    vendorLocation:{
        fontSize: 14,
        color: colors.grey,
        marginTop: 20
    },
    menu_icon:{
        color: colors.secondary
    }
});

export default styles;
