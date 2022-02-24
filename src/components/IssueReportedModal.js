import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {AppText} from './AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {AppButton} from './AppButton';

const IssueReportedModal = ({visible, setModalVisible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Thank You for using</Text>
            <Text style={styles.text}>
              the National Safety Intelligence System.
            </Text>
            <Text style={styles.text}>We will take action immediately</Text>
            <AntDesign
              name="checkcircle"
              size={130}
              color={colors.primary}
              style={{marginTop: 30}}
            />

            {/* onPress={() => setModalVisible(!visible)}> */}
            <View
              style={{
                width: '50%',
                justifyContent: 'flex-start',
                position: 'absolute',
                bottom: 20,
              }}>
              <AppButton
                title={'Done'}
                onPress={() => setModalVisible(!visible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default IssueReportedModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(54,54,54,0.7)',
  },
  modalView: {
    flex: 0.4,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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

  text: {
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
  },
});
