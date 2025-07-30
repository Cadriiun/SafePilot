import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import InputField from "@/components/InputField";
import {Image} from "expo-image";
import {icons} from "@/constants";
import {useSignIn} from "@clerk/clerk-react";
import {useRouter} from "expo-router";


const SignIn = () => {
    const {signIn, setActive, isLoaded} = useSignIn()
    const router = useRouter()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',

    })

    const handleGoogleSignIn = async () => {
    };

    const onSignInPress = async () => {
        if (!isLoaded) return

        // Start the sign-in process using the email and password provided
        try {
            const signInAttempt = await signIn.create({
                identifier: form.email,
                password: form.password,
            })

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === 'complete') {
                await setActive({session: signInAttempt.createdSessionId})
                router.replace('/')
            } else {
                // If the status isn't complete, check why. User might need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2))
        }
    }

    return (
        <LinearGradient colors={["#5D57EF", "#8B5CF6"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        className={"h-full px-6 pt-4 rounded-b-3xl mt-6 "}>

            <View className={"flex-row justify-end items-center mt-[50px]"}>
                <Text className={"text-white text-lg font-extralight"}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}
                                  className={" px-4 py-2 rounded-xl "} style={{backgroundColor: "#5D57EF"}}>
                    <Text className={"text-white font-semibold text-sm"}>Get Started</Text>
                </TouchableOpacity>
            </View>

            {/*<View className={"mt-[100px] items-center"}>*/}
            {/*    <Text className={"text-white text-3xl font-extrabold mb-[100px]"}>IMAGE FOR SAFEPILOT</Text>*/}
            {/*</View>*/}
            <View className={"mt-[50px]"}></View>
            <View className={"bg-white px-6 py-8  rounded-3xl shadow-lg h-full"}>
                <Text className={"text-black text-3xl font-bold mb-2"}>Welcome Back</Text>
                <Text className={"text-neutral-500 mb-6 text-m"}>Enter your details below</Text>
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
                                      onPress={onSignInPress}>
                        <LinearGradient
                            colors={['#94BBE9', '#EEAECA']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            className="py-6 px-12 rounded-full items-center"
                        >
                            <Text className="text-white text-center font-semibold text-lg p-4">Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>


                <View className={"my-6 flex-row items-center justify-center"}>
                    <Text style={{flex: 1, height: 1, backgroundColor: '#D1D5DB'}}></Text>
                    <Text className={"px-2 text-gray-600 text-sm font-semibold"}>Or sign in with</Text>
                    <Text style={{flex: 1, height: 1, backgroundColor: '#D1D5DB'}}></Text>
                </View>

                {/* Make google sign up */}
                <View className="flex-row justify-between space-x-4 mt-4">
                    <TouchableOpacity onPress={() => handleGoogleSignIn()}
                                      className="flex-1 flex-row items-center justify-center gap-2 border border-neutral-300 rounded-xl py-3 px-4 bg-white">
                        <Image source={icons.google} style={{width: 20, height: 20, marginHorizontal: 8}}/>
                        <Text className=" text-black font-semibold">Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>

    );
};

export default SignIn;
