import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from './rx/action';
import ListEpisode from './com/ListEpisode';
import Header from '../../components/Header';
import NetInfo from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function EpisodeScreen({navigation}) {
  const dispatch = useDispatch();
  const dataEpisode = useSelector(state => state.episode);
  const page = useRef(1);
  const endPage = useRef(false);
  const connect = useRef(false);

  useEffect(() => {
    dispatch(getData(page));
    unsubscribe();
  }, [dispatch, unsubscribe]);

  const unsubscribe = NetInfo.addEventListener(state => {
    if (state.isConnected) {
      connect.current = true;
    }
  });

  const handleLoadMore = () => {
    if (dataEpisode.info.count >= dataEpisode.data.length) {
      dispatch(getData(page.current + 1));
      page.current = page.current + 1;
    } else {
      endPage.current = true;
    }
  };

  const renderFooter = () => {
    return dataEpisode.loading && endPage.current === false ? (
      <ActivityIndicator size="small" color="#0000ff" />
    ) : endPage.current === true ? (
      <View style={styles.endOfPage}>
        <Text>End of Page</Text>
      </View>
    ) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="List Character" navigation={navigation} backPress={null} />
      <View style={styles.contentBackground}>
        <View style={styles.contentFlatlist}>
          <FlatList
            data={dataEpisode.data}
            renderItem={({item}) => (
              <ListEpisode itemEpisode={item} navigation={navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
          />
        </View>
        {connect.current === false ? (
          <View style={styles.containerReconnect}>
            <View style={styles.txtStyle}>
              <MaterialIcons name="wifi-off" color={'black'} size={16} />
              <Text>
                Please check your internet connection. \n You need to be online
                to access the app.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.containerTryAgain}
              onPress={() => {
                dispatch(getData(page));
              }}>
              <Text style={styles.txtTryAgain}>Try Again</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  txtHeader: {fontSize: 24, fontWeight: 'bold', color: 'gray'},
  endOfPage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  containerReconnect: {justifyContent: 'center', alignItems: 'center', flex: 1},
  containerTryAgain: {
    backgroundColor: '#23BF08',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 5,
  },
  txtTryAgain: {color: '#fff', fontSize: 16},
  txtStyle: {flexDirection: 'row'},
  contentBackground: {backgroundColor: 'cyan'},
  contentFlatlist: {marginHorizontal: 15},
});
