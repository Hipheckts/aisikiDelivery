import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    row: {
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 20
    },
    title: {
        fontFamily:'Custom-Font-Bold',
        fontWeight: 'bold',
        marginBottom: 30,
        textTransform: 'capitalize',
        fontSize: 20,
        // textAlign:"center"
    },
    subtitle:{
      fontSize: 18,
    },
    text:{
        fontFamily:'Custom-Font',
        margin:0,
        padding:0
    },


    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: Dimensions.get('window').height*0.35,
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
        backgroundColor: colors.secondary,
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
