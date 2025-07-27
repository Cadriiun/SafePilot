import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {router} from "expo-router";
import InputField from "@/components/InputField";
import {Image} from "expo-image";
import {icons} from "@/constants";
import {useSignUp} from "@clerk/clerk-react";
import {ReactNativeModal} from "react-native-modal";


const SignUp = () => {
    const {isLoaded, signUp, setActive} = useSignUp()
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',

    })

    const [verification, setVerification] = useState({
        state: 'default',
        error: '',
        code: '',
    })

    const handleGoogleSignIn = async () => {
    };

    const onSignUpPress = async () => {
        if (!isLoaded) return

        // Start a sign-up process using email and password provided
        try {
            await signUp.create({
                emailAddress: form.email,
                password: form.password,
            })

            // Send user an email with verification code
            await signUp.prepareEmailAddressVerification({strategy: 'email_code'})

            // Set 'pendingVerification' to true to display second form
            // and capture OTP code
            setVerification({
                ...verification,

                state: 'pending',
            })
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            Alert.alert('Error', err.erros[0].longMessage)
        }
    }

    // Handle submission of verification form
    const onVerifyPress = async () => {
        if (!isLoaded) return

        try {
            // Use the code the user provided to attempt verification
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code: verification.code,
            })

            // If verification was completed, set the session to active
            // and redirect the user
            if (signUpAttempt.status === 'complete') {
                // Create database user


                await setActive({session: signUpAttempt.createdSessionId})
                setVerification({
                    ...verification,
                    state: 'success',
                })
            } else {
                // If the status is not complete, check why. User may need to
                // complete further steps.
                setVerification({
                    ...verification,
                    error: "Verification Failed",
                    state: 'failed',
                })
            }
        } catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            setVerification({
                ...verification,
                error: err.error[0].longMessage,
                state: 'failed',
            })
        }
    }

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
                    icon={icons.user}
                    value={form.name}
                    onChangeText={(value) => setForm({...form, name: value,})}
                ></InputField>
                <InputField
                    placeholder="Enter your Email"
                    icon={icons.email}
                    value={form.email}
                    onChangeText={(value) => setForm({...form, email: value,})}
                ></InputField>
                <InputField
                    placeholder="Enter your Password"
                    icon={icons.password}
                    value={form.password}
                    secureTextEntry={true}
                    onChangeText={(value: any) => setForm({...form, password: value,})}
                ></InputField>

                <View className={"py-4 mt-6"}>
                    <TouchableOpacity className="rounded-2xl overflow-hidden mt-5 "
                                      onPress={onSignUpPress}>
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
                    <TouchableOpacity onPress={() => handleGoogleSignIn()}
                                      className="flex-1 flex-row items-center justify-center gap-2 border border-neutral-300 rounded-xl py-3 px-4 bg-white">
                        <Image source={icons.google} style={{width: 20, height: 20, marginHorizontal: 8}}/>
                        <Text className=" text-black font-semibold">Google</Text>
                    </TouchableOpacity>
                </View>

                <ReactNativeModal isVisible={verification.state === 'pending'} onModalHide={() => {
                    if (verification.state === 'success') setShowSuccessModal(true)
                }}>
                    <View className={"bg-white px-7 py-9 rounded-xl min-h-[300px]"}>
                        <Text className={'text-2xl font-extrabold mb-2'}>
                            Verification
                        </Text>
                        <Text className={'mb-5'}>
                            We've sent a verification code to {form.email}
                        </Text>

                        <InputField
                            placeholder={"Enter the code"}
                            value={verification.code}
                            onChangeText={(code: any) => setVerification({
                                ...verification,
                                code
                            })}
                        />

                        {verification.code && (
                            <Text className={'text-red-500 text-sm mt-1'}>
                                {verification.error}
                            </Text>
                        )}
                        <TouchableOpacity onPress={onVerifyPress}
                                          className="flex-row items-center justify-center border border-neutral-300 rounded-2xl py-4 px-6 bg-white mt-5">
                            <Text className="text-black font-semibold text-lg">Verify Email</Text>
                        </TouchableOpacity>
                    </View>

                </ReactNativeModal>

                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className={"bg-white px-7 py-9 rounded-2xl min-h-[300px]"}>
                        <Image source={icons.checkMark} style={{
                            width: 110,
                            height: 110,
                            marginHorizontal: 'auto',
                            marginVertical: 20,
                            alignSelf: 'center'
                        }}></Image>
                        <Text className={"text-3xl font-bold text-center"}> Successfully Verified</Text>
                        <Text className={"text-base text-gray-300 text-center mt-2"}>You have successfully verified your
                            account.</Text>
                        <TouchableOpacity onPress={() => router.replace('/(root)/(tabs)/home')}
                                          className="flex-row items-center justify-center border border-neutral-300 rounded-xl py-3 px-4 bg-white mt-5">
                            <Text className=" text-black font-semibold">Go to Home</Text>
                        </TouchableOpacity>
                    </View>
                </ReactNativeModal>
            </View>
        </LinearGradient>

    );
};

export default SignUp;
