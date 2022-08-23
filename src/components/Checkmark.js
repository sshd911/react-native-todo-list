import { StyleSheet, Image, TouchableOpacity, Touchable } from "react-native";

const styles = StyleSheet.create({
  checkmark: {
    width: 30,
    height: 30
  }
})

export default function Checkmark({ complete , onPress}) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => { onPress(complete)}}>
    { complete == true && <Image style={styles.checkmark}source={require('../../assets/images/checkmark.png')}></Image>}
    { complete == false && <Image style={styles.checkmark}source={require('../../assets/images/un_checkmark.png')}></Image>}
    </TouchableOpacity>
  );
}
