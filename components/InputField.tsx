import {KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";

const inputField = () => (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View></View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
export default inputField;