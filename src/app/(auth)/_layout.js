import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="landing" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
        </Stack>
    );
}