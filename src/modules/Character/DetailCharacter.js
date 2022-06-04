import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const windowHeight = Dimensions.get('window').height;
export default function DetailCharacter({route, navigation}) {
  const item = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detail Character" navigation={navigation} />
      <ScrollView>
        <View style={styles.containerView}>
          <View
            style={[
              styles.containerContent,
              item.gender === 'Male'
                ? {backgroundColor: '#A8C3EA'}
                : item.gender === 'Female'
                ? {backgroundColor: '#FEBFC7'}
                : {backgroundColor: '#D1D5DB'},
            ]}>
            <Image
              source={{
                uri: item.image,
              }}
              resizeMode="cover"
              style={styles.imgCover}
            />
            <View style={styles.containerContentTxt}>
              <Text style={styles.txtHeader}>{item.name}</Text>
              <View style={styles.contentTxt}>
                <View style={styles.line}>
                  <Text>{item.species}</Text>
                </View>
                <View style={styles.line}>
                  <Text>{item.status}</Text>
                </View>
                <View style={styles.lastLine}>
                  <Text>{item.location.name}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  containerView: {
    padding: 15,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? windowHeight / 3 : windowHeight / 2.7,
  },
  containerContent: {
    padding: 10,
    flex: 1,
    height: Platform.OS === 'ios' ? windowHeight / 3 : windowHeight / 2.5,
    borderRadius: 10,
  },
  containerContentTxt: {flex: 1, alignItems: 'center'},
  containerTxt: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  contentTxt: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  imgCover: {
    width: '100%',
    height: Platform.OS === 'ios' ? windowHeight / 2.5 : windowHeight / 2,
    borderRadius: 5,
    marginTop: Platform.OS === 'ios' ? windowHeight / -3 : windowHeight / -2.5,
  },
  line: {
    borderBottomWidth: 0.5,
    width: '100%',
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 10,
  },
  lastLine: {
    width: '100%',

    alignItems: 'center',
    paddingVertical: 10,
  },
  txtHeader: {
    fontSize: 20,
    color: 'white',
    paddingVertical: 20,
    fontWeight: '600',
  },
});
