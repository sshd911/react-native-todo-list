import { Alert } from "react-native";

export default class AlertUtil {
  static showTextInputAlert(title, message, onPress) {
    Alert.prompt(title, message,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: (text) => onPress(text)}
      ]
    );
  }
}
