import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';
import {AppButton} from './AppButton';
import {AppText} from './AppText';

const ErrorModal = ({
  modalVisible,
  setModalVisible,
  isError = true,
  message = 'Error',
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {isError ? (
              <Icon2 name="error-outline" size={60} color={'red'} />
            ) : (
              <Icon name="check-circle" size={80} color={colors.primary} />
            )}
            <AppText size={14} text={message} />
            <AppButton
              title={'Close'}
              width={200}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ErrorModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(54,54,54,0.3)',
  },
  modalView: {
    width: '98%',
    height: '28%',
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    bottom: -20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
