import {Image} from "expo-image";
import {ImageSourcePropType, View} from "react-native";
import {Tabs} from "expo-router";
import {icons} from "@/constants";
import React from "react";

const TabIcon = ({source, focused}: { source: ImageSourcePropType; focused: boolean }) => (
    <View className="items-center justify-center pt-9">
        <View
            className={`w-12 h-12 rounded-2xl items-center justify-center ${
                focused ? "bg-white shadow-md" : "bg-[#444]"
            }`}
            style={{
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 3,
            }}
        >
            <Image
                source={source}
                style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#333" : "#ccc",
                }}
                contentFit="contain"
            />
        </View>
    </View>
);

const Layout = () => {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#aaa",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#1e1e1e",
                    borderRadius: 40,
                    marginHorizontal: 24,
                    marginBottom: 30,
                    height: 80,
                    position: "absolute",
                    shadowColor: "#000",
                    shadowOpacity: 0.2,
                    shadowOffset: {width: 0, height: 5},
                    shadowRadius: 10,
                    elevation: 10,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.home}/>,
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: "Rides",
                    headerShown: false,
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.ride}/>,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                    headerShown: false,
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.chat}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.user}/>,
                }}
            />
        </Tabs>
    );
};

export default Layout;
