import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListCharacterAppear({itemCharacter, onEpisode}) {
  return (
    <View style={styles.container}>
      {itemCharacter.image !== null ? (
        <Image
          source={{
            uri: itemCharacter.image,
          }}
          resizeMode="cover"
          style={styles.imgCover}
        />
      ) : (
        <TouchableOpacity onPress={onEpisode} style={styles.more}>
          <Text>+{itemCharacter.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,
  },
  imgCover: {width: 80, height: 80, borderRadius: 5},

  txtHeader: {fontSize: 20, fontWeight: '500', color: 'blue'},
  more: {
    width: 80,
    height: 80,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
