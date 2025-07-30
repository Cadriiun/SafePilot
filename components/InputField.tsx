import React from "react";
import {Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Image} from "expo-image";

const InputField = ({
                        placeholder,
                        secureTextEntry = false,
                        containerStyle = "",
                        inputStyle = "",
                        icon = "",
                        ...props

                    }: {
    placeholder: string,
    secureTextEntry: boolean,
    containerStyle: string,
    inputStyle: string,
    icon: string,

}) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    className={`bg-neutral-100 border border-neutral-200 rounded-full  flex-row items-center px-8 py-3 ml-4 mr-4 mt-6 ${containerStyle}`}>
                    {icon ? (
                        <Image source={icon} style={{width: 20, height: 20, marginRight: 12}} resizeMode={'contain'}/>
                    ) : null}
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        className={`rounded-full p-4 font-semibold text-[15px] flex-1 ${inputStyle}`}
                        {...props}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;