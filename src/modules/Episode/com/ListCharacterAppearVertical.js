import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListCharacterAppearVertical({item}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
          style={styles.imgCover}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,
  },
  imgCover: {width: 60, height: 60, borderRadius: 5, marginRight: 10},
  containerContent: {marginLeft: 10},
  txtHeader: {fontSize: 20, fontWeight: '500', color: 'blue'},
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
