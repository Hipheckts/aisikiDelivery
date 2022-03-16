import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import OutlineButtonProps from './model';
import styles from './styles';
import colors from '../../config/colors';

export default function OutlineButton({
    color = colors.primary,
    title,
    onPress
}: OutlineButtonProps) {
    return (
        <TouchableOpacity
            style={[{ borderColor: color }, styles.button]}
            onPress={onPress}>
            <Text style={[{ color: color }, styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    );
}