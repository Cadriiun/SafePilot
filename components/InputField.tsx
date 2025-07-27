import React from "react";
import {Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View} from "react-native";

const InputField = ({
                        placeholder,
                        secureTextEntry = false,
                        containerStyle = "",
                        inputStyle = "",
                        ...props
                    }: {
    placeholder: string,
    secureTextEntry: boolean,
    containerStyle: string,
    inputStyle: string,

}) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    className={`bg-neutral-100 border border-neutral-200 rounded-full shadow-sm flex-row items-center px-8 py-3 ml-4 mr-4 mt-6 ${containerStyle}`}>
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