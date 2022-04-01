import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../../config/colors';


const numColumns = 3;
const size = Dimensions.get('window').width / numColumns - 25

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: 'absolute',
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width,
        backgroundColor: colors.white,
        padding: 10
    },
    margin: {
        marginTop: 50
    },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9,
        // marginTop: Dimensions.get('window').height * 0.15
      },
});

export default styles;
