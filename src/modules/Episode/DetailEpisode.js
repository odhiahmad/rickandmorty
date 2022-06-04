import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {getDetail} from './rx/action';
import ListCharacterAppearVertical from './com/ListCharacterAppearVertical';

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

export default function DetailEpisode({route, navigation}) {
  const itemEpisode = route.params.item;
  const dispatch = useDispatch();
  const dataEpisode = useSelector(state => state.episode);

  useEffect(() => {
    dispatch(getDetail(itemEpisode.characters, 'all'));
  }, [dispatch, itemEpisode.characters]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="" navigation={navigation} />
      <View style={styles.containerScrollView}>
        <Text style={styles.txtEpisode}>{itemEpisode.episode}</Text>
        <Text numberOfLines={2} style={styles.txtName}>
          {itemEpisode.name}
        </Text>
        <Text style={styles.txtAirDate}>{itemEpisode.air_date}</Text>
        <View style={styles.border} />
        <Text>These characters appeared in this episode :</Text>
        <FlatList
          data={dataEpisode.dataDetail}
          renderItem={({item}) => (
            <ListCharacterAppearVertical item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  containerScrollView: {padding: 15},
  txtEpisode: {fontSize: 26, color: generateColor()},
  txtName: {fontSize: 30, fontWeight: '600'},
  txtAirDate: {fontSize: 18, fontWeight: '400'},
  border: {
    borderBottomWidth: 0.4,
    borderColor: 'black',
    marginVertical: 20,
  },
});
