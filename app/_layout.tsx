import {Stack} from "expo-router";
import "./globals.css"

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"(auth)"} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"(root)"} options={{headerShown: false}}></Stack.Screen>
        </Stack>
    )
}

export default Layout;