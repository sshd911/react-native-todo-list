import { StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from "react-native-elements";
import SwipeableRow from './SwipeableRow';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listItemTitle: {
    flex: 1,
  }
})

export default function TabListItem({ tabTitle }) {
  function btnTapped(btnId) {
    if (btnId == 0) {

    }
  }

  return (
    <SwipeableRow onPress={btnTapped}>
    <ListItem topDivider style={{ width: '100%'}}>
      <ListItem.Content  style={styles.listItem}>
        <ListItem.Title style={styles.listItemTitle}>{`${tabTitle}`}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
    </SwipeableRow>
  )
}
