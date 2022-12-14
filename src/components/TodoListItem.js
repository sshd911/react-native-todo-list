import { StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from "react-native-elements";
import Checkmark from "./Checkmark";
import SwipeableRow from './SwipeableRow';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listItemTitle: {
    flex: 1,
    marginLeft: 10
  }
})

export default function TodoListItem({ todoTitle }) {
  function btnTapped(btnId) {
    if (btnId == 0) {

    }
  }

  return (
    <SwipeableRow onPress={btnTapped}>
    <ListItem topDivider style={{ width: '100%'}}>
      <ListItem.Content  style={styles.listItem}>
      <Checkmark complete={true}></Checkmark>
        <ListItem.Title style={styles.listItemTitle}>{`${todoTitle}`}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
    </SwipeableRow>
  )
}
