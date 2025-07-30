import {Stack} from "expo-router";
import "./globals.css"
import {ClerkProvider} from '@clerk/clerk-expo'
import {tokenCache} from '@clerk/clerk-expo/token-cache'

const Layout = () => {
    const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
            <Stack>
                <Stack.Screen name={"index"} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name={"(auth)"} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name={"(root)"} options={{headerShown: false}}></Stack.Screen>
            </Stack>
        </ClerkProvider>
    )
}

export default Layout;