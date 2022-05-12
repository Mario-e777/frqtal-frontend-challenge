/* React stuff */
import { Alert } from "react-native"

const AsyncAlert = ({ title, message, buttonText }: { title: string, message: string, buttonText: string }) => {
    return new Promise((resolve, reject) => {
        Alert.alert(
            title,
            message,
            [{ text: buttonText, onPress: () => resolve(buttonText) }],
            { cancelable: false }
        )
    });
};

export {
    AsyncAlert
};
