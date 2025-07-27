import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {router} from "expo-router";
import InputField from "@/components/InputField";
import {Image} from "expo-image";
import {icons} from "@/constants";


const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',

    })

    const onSignUpPress = async () => {
    };

    return (
        <LinearGradient colors={["#5D57EF", "#8B5CF6"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        className={"h-full px-6 pt-4 rounded-b-3xl mt-6 "}>

            <View className={"flex-row justify-end items-center mt-[50px]"}>
                <Text className={"text-white text-lg font-extralight"}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}
                                  className={" px-4 py-2 rounded-xl "} style={{backgroundColor: "#5D57EF"}}>
                    <Text className={"text-white font-semibold text-sm"}>Sign in</Text>
                </TouchableOpacity>
            </View>

            {/*<View className={"mt-[100px] items-center"}>*/}
            {/*    <Text className={"text-white text-3xl font-extrabold mb-[100px]"}>IMAGE FOR SAFEPILOT</Text>*/}
            {/*</View>*/}
            <View className={"mt-[50px]"}></View>
            <View className={"bg-white px-6 py-8  rounded-3xl shadow-lg h-full"}>
                <Text className={"text-black text-3xl font-bold mb-2"}>Get Started!</Text>
                <Text className={"text-neutral-500 mb-6 text-m"}>Welcome to SafePilot, Let's create your
                    account</Text>
                <InputField
                    placeholder="Enter your Name"
                    value={form.name}
                    onChangeText={(value) => setForm({...form, name: value,})}
                ></InputField>
                <InputField
                    placeholder="Enter your Email"
                    value={form.email}
                    onChangeText={(value) => setForm({...form, email: value,})}
                ></InputField>
                <InputField
                    placeholder="Enter your Password"
                    value={form.password}
                    secureTextEntry={true}
                    onChangeText={(value: any) => setForm({...form, password: value,})}
                ></InputField>

                <View className={"py-4 mt-6"}>
                    <TouchableOpacity className="rounded-2xl overflow-hidden mt-5 "
                                      onPress={() => router.replace("/(root)/(tabs)/home")}>
                        <LinearGradient
                            colors={['#94BBE9', '#EEAECA']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            className="py-6 px-12 rounded-full items-center"
                        >
                            <Text className="text-white text-center font-semibold text-lg p-4">Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>


                <View className={"my-6 flex-row items-center justify-center"}>
                    <Text style={{flex: 1, height: 1, backgroundColor: '#D1D5DB'}}></Text>
                    <Text className={"px-2 text-gray-600 text-sm font-semibold"}>Or sign up with</Text>
                    <Text style={{flex: 1, height: 1, backgroundColor: '#D1D5DB'}}></Text>
                </View>

                {/* Make google sign up */}
                <View className="flex-row justify-between space-x-4 mt-4">
                    <TouchableOpacity
                        className="flex-1 flex-row items-center justify-center gap-2 border border-neutral-300 rounded-xl py-3 px-4 bg-white">
                        <Image source={icons.google} className="w-5 h-5"/>
                        <Text className=" text-black font-semibold">Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>

    );
};

export default SignUp;
