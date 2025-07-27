import {Redirect, Stack} from 'expo-router'

const authLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={"welcome"} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"sign-up"} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"sign-in"} options={{headerShown: false}}></Stack.Screen>
        </Stack>
    )
}

export default authLayout;