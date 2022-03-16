import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.lightGray,
        borderRadius: 10,
        flexDirection: 'row',
        width: '100%',
        padding: 15, // ios : 15
        marginVertical: 10,
        marginTop: 10, // ios : 0
        borderBottomWidth: 1,
        borderBottomColor: "#F2F2F2",

    },
    icon: {
        marginRight: 10,
        marginTop: 5, // ios : 0
        color: colors.secondary
    }
});

export default styles;
