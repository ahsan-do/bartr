import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Button from "../../components/Button";

export default function LandingScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                </View>
                <View style={styles.button}>
                <Button title="Sign Up" onPress={() => router.push('/(auth)/signup')} style={{borderRadius:50, width: 264, height:64 }} />
                <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                    <Text style={styles.loginText}>I already have an account</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        position: 'absolute',
        top: 198,
    },

    image: {
        width: 274,
        height: 192,
        // marginBottom: 40,
    },

    loginText: {
        color: '#BABABA',
        marginTop:10,
        textDecorationLine: 'underline',
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 45,
    },
});