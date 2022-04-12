import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 50,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    },
    title: {
        fontFamily:'Custom-Font-Bold',
        fontWeight: 'bold',
        marginBottom: 30,
        textTransform: 'capitalize',
        fontSize: 20,
        textAlign:"center"
    },
    text:{
        fontFamily:'Custom-Font',
        margin:0,
        padding:0
    }
});

export default styles;
