import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation, backPress, title}) {
  return (
    <View style={styles.container}>
      {backPress === null ? null : (
        <MaterialIcons
          onPress={() => navigation.pop()}
          name="arrow-back-ios"
          color={'black'}
          size={24}
        />
      )}
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txtTitle: {fontSize: 20, fontWeight: 'bold'},
});
