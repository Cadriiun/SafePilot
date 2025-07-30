import {Image} from "expo-image";
import {ImageSourcePropType, View} from "react-native";
import {Tabs} from "expo-router";

const TabIcon = ({source, focused}: { source: ImageSourcePropType; focused: boolean }) => (
    <View className="flex flex-row justify-center items-center rounded-full">
        <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-amber-200" : ""}`}>
            <Image
                source={source}
                tintColor={focused ? "black" : "white"}
                contentFit="contain"
            />
        </View>
    </View>
);

const Layout = () => {
    return <Tabs initialRouteName={"index"} screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 20,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            position: "absolute",
        }
    }}>
        <Tabs.Screen name={"home"} options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icon.home}/>,
        }}/>
        <Tabs.Screen name={"rides"} options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icon.ride}/>,
        }}/>
        <Tabs.Screen name={"chat"} options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icon.chat}/>,
        }}/>
        <Tabs.Screen name={"profile"} options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icon.user}/>,
        }}/>
    </Tabs>
}
export default Layout;