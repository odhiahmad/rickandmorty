import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDetail} from '../rx/action';
import ModalBottom from './ModalBottom';
export default function ListEpisode({itemEpisode, navigation}) {
  const [showCharacter, setShowCharacter] = useState(false);
  const dispatch = useDispatch();
  const dataEpisode = useSelector(state => state.episode);

  const onEpisode = () => {
    setShowCharacter(false);
    navigation.navigate('DetailEpisode', {
      item: itemEpisode,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailEpisode', {
          item: itemEpisode,
        });
      }}
      style={styles.container}>
      <View style={styles.containerHeader}>
        <Text numberOfLines={1} style={styles.txtHeader}>
          {itemEpisode.episode + ': ' + itemEpisode.name}
        </Text>
      </View>
      <View style={styles.containerContent}>
        <Text>Aired in {itemEpisode.air_date}</Text>

        <TouchableOpacity
          onPress={() => {
            setShowCharacter(true);
            dispatch(getDetail(itemEpisode.characters, 'notall'));
          }}>
          <Text style={styles.txtSecondText}>
            Who appeared in this episode?
          </Text>
        </TouchableOpacity>
        <ModalBottom
          visible={showCharacter}
          onClose={() => {
            setShowCharacter(false);
          }}
          dataEpisode={dataEpisode}
          onEpisode={onEpisode}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
  containerHeader: {
    backgroundColor: '#23BF08',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  imgCover: {width: 100, height: 100, borderRadius: 5},
  containerContent: {alignItems: 'center', marginVertical: 20},
  txtHeader: {fontSize: 14, fontWeight: '500', color: 'white'},
  txtSecondText: {color: '#23BF08'},
});
