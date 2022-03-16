import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

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
    productImg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
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
        marginTop: Dimensions.get('window').width * 0.15,
        marginLeft: Dimensions.get('window').width * 0.09,
        width: Dimensions.get('window').width * 0.8,
        // alignContent: 'center'
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
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: colors.red,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});

export default styles;
