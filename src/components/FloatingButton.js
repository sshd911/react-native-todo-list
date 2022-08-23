import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    rigth: 30,
    bottom: 60,
    width: 60,
    height: 60,
    backgroundColor: '#167476',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
})

export default function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="plus" size={25} color={'white'}></Icon>
    </TouchableOpacity>
  )
}
