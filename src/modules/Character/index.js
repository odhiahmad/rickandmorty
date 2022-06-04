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
import ListCharacter from './com/ListCharacter';
import Header from '../../components/Header';
import NetInfo from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function CharacterScreen({navigation}) {
  const dispatch = useDispatch();
  const dataCharacter = useSelector(state => state.character);
  const page = useRef(1);
  const connect = useRef(false);
  const endPage = useRef(false);

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
    if (dataCharacter.info.count >= dataCharacter.data.length) {
      dispatch(getData(page.current + 1));
      page.current = page.current + 1;
    } else {
      endPage.current = true;
    }
  };

  const renderFooter = () => {
    return dataCharacter.loading && endPage.current === false ? (
      <ActivityIndicator size="small" color="#23BF08" />
    ) : endPage.current === true ? (
      <View style={styles.endOfPage}>
        <Text>End of Page</Text>
      </View>
    ) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="List Character" navigation={navigation} backPress={null} />
      <View style={styles.containerContent}>
        <View style={styles.flatlistStyle}>
          <FlatList
            data={dataCharacter.data}
            renderItem={({item}) => {
              return <ListCharacter item={item} navigation={navigation} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.01}
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
  container: {flex: 1, backgroundColor: 'white'},
  containerContent: {flex: 1, backgroundColor: 'cyan'},
  txtHeader: {fontSize: 24, fontWeight: 'bold', color: 'gray'},
  containerReconnect: {justifyContent: 'center', alignItems: 'center', flex: 1},
  flatlistStyle: {marginHorizontal: 15},
  txtStyle: {flexDirection: 'row'},
  txtTryAgain: {color: '#fff', fontSize: 16},
  containerTryAgain: {
    backgroundColor: '#23BF08',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 5,
  },
  endOfPage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
