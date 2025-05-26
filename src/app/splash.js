import { useEffect } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/landing');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
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
    },

});