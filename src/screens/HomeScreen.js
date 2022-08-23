import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkmark from '../components/Checkmark';

export default function HomeScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Tab')}>
            <Icon name='folder' color={'white'} size={25}></Icon>
          </TouchableOpacity>
        );
      }});
  }, []);
  return (
    <View style={styles.container}>
    <Checkmark complete={ false } onPress={(complete) => console.log(complete)}></Checkmark>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});