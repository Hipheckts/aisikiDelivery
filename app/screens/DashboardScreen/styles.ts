import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';


const numColumns = 3;
const size = Dimensions.get('window').width / numColumns - 25

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    container: {
        // flex: 1,
        backgroundColor: colors.primary,
        height: Dimensions.get('window').height,
    },
    margin: {
        marginTop: 30
    },
    topContainer: {
        position: "absolute",
        height: Dimensions.get('window').height * 0.38,
        width: Dimensions.get('window').width,
        marginVertical: Platform.OS == 'ios' ? 50 : 20,
        // marginHorizontal: 20
    },
    bannerImg:{
        marginTop: 15,
        width: Dimensions.get('window').width * 0.92,
        height: 100,
        borderRadius: 10
    },
    lowerContainer: {
        top: Dimensions.get('window').height / 1.7,
        backgroundColor: colors.white,
        height: Dimensions.get('window').height * 0.62,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navRow:{
        marginTop: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    welcomeText: {
        fontSize: 14,
        color: colors.white
    },
    findText: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.white
    },
    inputField: {
        marginTop: 20,
        width: Dimensions.get('window').width * 0.89,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 4,
        padding: 10
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
        margin: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 8,
        color: colors.primary
    },
    price: {
        marginLeft: 5,
        fontSize: 8
    },
    productImg: {
        borderRadius: 5,
        width: size * 0.82,
        height: size * 0.5
    },
    walletRow: {
        // marginTop: 40,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    walletTitle:{
        fontSize: 12,
        color: colors.lightBlue,
        marginBottom: 5,
    },
    walletBalance:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 50,
        color: colors.white
    },
    walletCurrency:{
        marginBottom: 10,
        marginLeft: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        color: colors.secondary
    },
    period:{
        // backgroundColor: colors.secondary,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
        marginLeft: 10,
    },
    periodActive:{
        borderWidth: 1,
        borderColor: colors.lightBlue,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 20,
        marginTop: 25,
        marginLeft: 10,
    },
    periodTitle:{
        fontSize: 14,
        color: colors.white
    },
    salesCard: {
        height: 130,
        width: Dimensions.get('window').width * 0.31,
        backgroundColor: colors.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: colors.yellow,
    },
    salesCard2: {
        height: 130,
        width: Dimensions.get('window').width * 0.55,
        backgroundColor: colors.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: colors.yellow
    },
    salesCardTitle:{
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.primary
    },
    salesCardSubtitle:{
        marginTop: 5,
        fontSize: 16,
        color: colors.grey
    },
    bizCard: {
        height: 130,
        width: Dimensions.get('window').width * 0.43,
        backgroundColor: colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 20
    },
    bizCard2: {
        height: 130,
        width: Dimensions.get('window').width * 0.43,
        backgroundColor: colors.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: colors.yellow
    },
    bizCardTitle:{
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.white
    },
    bizCardSubtitle:{
        marginTop: 5,
        fontSize: 16,
        color: colors.black
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
        borderRadius: 15
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
    vendorDate:{
        fontSize: 14,
        color: colors.grey,
        marginTop: 10
    },
    menu_icon:{
        color: colors.secondary
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

    title: {
        fontWeight: 'bold',
        padding: 10,
        textTransform: 'capitalize',
        fontSize: 18
    },
    statusText: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.black
    },
    button: {
        height: 30,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
    },
    buttonText: {
        fontFamily:'Custom-Font-Bold',
        color: colors.white,
        fontSize: 12
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9,
        marginTop: Dimensions.get('window').height * 0.15
      },
});

export default styles;
