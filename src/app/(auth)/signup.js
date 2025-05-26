import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { router } from "expo-router";

const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            router.replace('../(tabs)/home');
        }
    };

    const isFormValid = () => {
        return (
            formData.name.trim() &&
            formData.email.trim() &&
            validateEmail(formData.email) &&
            formData.password &&
            validatePassword(formData.password) &&
            formData.password === formData.confirmPassword
        );
    };

    return (
        <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidContainer}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <ScrollView style={styles.formContainer}>
                    <InputField
                        label="First And Last Name"
                        placeholder="Your first and last name"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                        maxLength={64}
                        error={errors.name}
                        showCharacterCount
                    />

                    <InputField
                        label="Email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={errors.email}
                    />

                <InputField
                    label="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry
                    maxLength={64}
                    error={errors.password}
                    showCharacterCount
                />

                <InputField
                    label="Confirm Password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                    secureTextEntry
                    maxLength={64}
                    error={errors.confirmPassword}
                    showCharacterCount
                />

                </ScrollView>
            </ScrollView>
        </KeyboardAvoidingView>
            <View style={styles.buttonContainer}>
                <Button
                    title="Sign Up"
                    onPress={handleSubmit}
                    disabled={!isFormValid()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardAvoidContainer:{
      flex:1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100,
    },
    formContainer: {
        marginTop:100,
        marginBottom: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        width:'80%',
        paddingHorizontal: 20,
    },
});

export default Signup;