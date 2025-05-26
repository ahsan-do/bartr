import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({
                        label,
                        placeholder,
                        value,
                        onChangeText,
                        secureTextEntry = false,
                        keyboardType = 'default',
                        autoCapitalize = 'sentences',
                        maxLength,
                        error,
                        showCharacterCount = false,
                    }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, error && styles.errorInput]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                />
                {showCharacterCount && (
                    <View style={styles.counterContainer}>
                        <Text style={styles.characterCount}>
                            {value ? value.length : 0}/{maxLength}
                        </Text>
                    </View>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        position: 'relative',
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
        fontWeight:500
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#000000',
        padding: 12,
        fontSize: 16,
        paddingRight: 60,
        paddingVertical: 8,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    counterContainer: {
        position: 'absolute',
        right: 12,
        bottom: 12,
    },
    characterCount: {
        fontSize: 12,
        color: 'gray',
    },
});

export default InputField;