import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import signupImage from "@/assets/images/signup.png";
import InputField from "@/components/InputField";


const SignUp = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
                <View className="relative w-full h-[250]">
                    <Image
                        source={signupImage}
                        style={{
                            zIndex: 0,
                            width: '100%',
                            height: 200,
                        }}
                        contentFit="cover"
                    />
                    <Text className="text-3xl text-black absolute bottom-6 left-6">
                        Create Your Account
                    </Text>
                </View>
                <View className={"p-5"}>
                    {/*<InputField ></InputField>*/}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
