import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const numColumns = 3
const size = Dimensions.get('window').width / numColumns - 25

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    margin: {
        marginTop: 20
    },
    productsContainer: {
        margin: 5,
    },
    productImg: {
        borderRadius: 5,
        width: size * 0.82,
        height: size * 0.5
    },
    name:{
      marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    price:{
        fontSize: 20,
    },
    btnContainer:{
        // marginTop: Dimensions.get('window').width * 0.15,
        // marginLeft: Dimensions.get('window').width * 0.09,
        width: Dimensions.get('window').width,
        // alignContent: 'center'
    },

    itemContainer: {
      width: size,
      height: size+10,
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
      fontSize: 12
  },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // backgroundColor: colors.black
      },
      modalView: {
        width: Dimensions.get('window').width*0.9,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        // height: 41,
        alignItems: 'center',
        padding: 18,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: colors.primary,
        marginTop: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20
      },
      modalAmount: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.red
      },
      statusText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase'
      },

    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.2,
      // marginTop: Dimensions.get('window').height * 0.15
    },
});

export default styles;
