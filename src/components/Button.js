import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, disabled, style }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                disabled ? styles.disabled : styles.active,
                style
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={disabled ? styles.disabledText : styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 64,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: '#6081EC',
        borderWidth: 0, // Explicitly remove border for active state
    },
    disabled: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#7B6F72',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Poppins',
    },
    disabledText: {
        color: '#7B6F72',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Poppins',
    }
});

export default Button;