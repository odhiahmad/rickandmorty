import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ListCharacterAppear from './ListCharacterAppear';
const height = Dimensions.get('window').height;

const ModalBottom = ({visible, onClose, dataEpisode, onEpisode}) => {
  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <View style={styles.bottomDock}>
        <View style={styles.modalView}>
          <View style={styles.contentView}>
            <View style={styles.iconView}>
              <TouchableOpacity onPress={onClose}>
                <Image source={require('@assets/images/close.png')} />
              </TouchableOpacity>
            </View>
            <FlatList
              numColumns={4}
              data={dataEpisode.dataDetail}
              renderItem={({item}) => (
                <ListCharacterAppear
                  itemCharacter={item}
                  onEpisode={onEpisode}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBottom;

const styles = StyleSheet.create({
  bottomDock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(17, 24, 28, 0.5)',
    zIndex: 999,
  },

  modalView: {
    height: height / 3,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  contentView: {
    padding: 15,
  },
  iconView: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
});
