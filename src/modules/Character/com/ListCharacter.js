import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowHeight = Dimensions.get('window').height;

export default function ListCharacter({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailCharacter', {
          item: item,
        });
      }}
      style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
        style={styles.imgCover}
      />
      <View style={styles.containerTxt}>
        <Text numberOfLines={1} style={styles.txtHeader}>
          {item.name}
        </Text>

        <View style={styles.containerContent}>
          <Text style={styles.txtSpecies}>{item.species}</Text>
          <View style={styles.contentInfo}>
            <MaterialIcons name="emoji-people" color={'#23BF08'} size={20} />
            <View style={styles.contentStatus}>
              <Text style={styles.txtStatus}>{item.status}</Text>
            </View>
          </View>

          <View style={styles.contentLocation}>
            <MaterialIcons name="location-on" color={'#23BF08'} size={16} />
            <Text style={styles.txtLocation}>{item.location.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    height: windowHeight / 7,
    alignItems: 'center',
  },
  imgCover: {
    width: 100,
    height: windowHeight / 7,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  containerContent: {
    justifyContent: 'space-between',
    height: windowHeight / 13,
  },
  containerTxt: {flexDirection: 'column', marginLeft: 10},
  contentInfo: {flexDirection: 'row'},
  contentStatus: {
    backgroundColor: '#23BF08',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  contentLocation: {flexDirection: 'row'},
  txtHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  txtSpecies: {color: 'gray'},
  txtStatus: {color: '#fff'},
  txtLocation: {color: '#23BF08'},
});
