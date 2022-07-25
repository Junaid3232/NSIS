import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../config/colors';
import {AppText} from '../AppText';
import {AppTextBox} from '../AppTextBox';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
const DesignedChannelCard = ({
  setResponsiblePersonName,
  setResponsiblePersonPhone,
  responsiblePersonName,
  responsiblePersonPhone,
  setResponsiblePersonEmail,
  responsiblePersonEmail,
}) => {
  const [extendView, setExtendView] = useState(false);
  const [extendView2, setExtendView2] = useState(false);
  const [extendView3, setExtendView3] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDone = text => {
    setLoading(true);
    setTimeout(() => {
      setExtendView(false);
      setLoading(false);
    }, 2000);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setExtendView(!extendView);
      }}>
      {responsiblePersonName !== '' &&
      responsiblePersonPhone !== '' &&
      responsiblePersonEmail !== '' ? (
        <View style={styles.counterSticker}>
          <Entypo name="check" color={'#fff'} size={15} />
        </View>
      ) : (
        <View style={styles.counterSticker}>
          <AppText color={'#fff'} text={'7'} />
        </View>
      )}
      <AppText text={'Designated Safety Channel'} color={colors.black} />
      <AppText
        text={
          'We will like to know if the organization you are reporting have a designated channel to report safety issues'
        }
        color={colors.gray}
        size={10}
      />
      {extendView && (
        <>
          <TextInput
            style={styles.textBox}
            value={responsiblePersonName}
            placeholder={'Enter Name of Person Responsible for Safety'}
            placeholderTextColor={colors.gray}
            onSubmitEditing={() => {
              setLoading(true);
              setTimeout(() => {
                setExtendView2(true);
                setLoading(false);
              }, 2000);
            }}
            onChangeText={value => {
              setResponsiblePersonName(value);
            }}
          />
          {/* 
          <TouchableOpacity style={styles.doneButton} onPress={onDone}>
            <AppText color={'white'} text={'Done'} size={10} />
          </TouchableOpacity> */}
        </>
      )}
      {extendView2 && (
        <View
          style={{
            borderTopWidth: 0.5,
            marginTop: 15,
            borderColor: colors.gray,
          }}>
          <TextInput
            style={styles.textBox}
            value={responsiblePersonPhone}
            placeholderTextColor={colors.gray}
            keyboardType="numeric"
            placeholder={'Enter Phone Number of Person Responsible for Safety'}
            onSubmitEditing={() => {
              setLoading(true);
              setTimeout(() => {
                setExtendView3(true);
                setLoading(false);
              }, 2000);
            }}
            onChangeText={value => {
              setResponsiblePersonPhone(value);
            }}
          />
        </View>
      )}
      {extendView3 && (
        <View
          style={{
            borderTopWidth: 0.5,
            marginTop: 15,
            borderColor: colors.gray,
          }}>
          <TextInput
            style={styles.textBox}
            value={responsiblePersonEmail}
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
            placeholder={'Enter Email Address Designed to Report Safety Issues'}
            onSubmitEditing={() => {
              setLoading(true);
              setTimeout(() => {
                setExtendView(false);
                setExtendView2(false);
                setExtendView3(false);
                setLoading(false);
              }, 2000);
            }}
            onChangeText={value => {
              setResponsiblePersonEmail(value);
            }}
          />
        </View>
      )}
      {loading && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
            borderTopWidth: 0.5,
            paddingTop: 10,
          }}>
          <AppText
            text={'Next Question Will Load After Your Response Above'}
            size={10}
            color={colors.gray}
          />
          <Loader />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DesignedChannelCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
  },
  container: {
    // height: 120,
    width: '90%',
    backgroundColor: colors.lightGray,
    borderWidth: 0,
    borderColor: 'green',
    marginVertical: 8,
    borderRadius: 10,
    zIndex: -999,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterSticker: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
    width: 30,
    position: 'absolute',
    left: -15,
    top: 15,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBox: {
    marginTop: 20,
    paddingVertical: 10,
    width: '100%',
    height: 35,
    borderColor: colors.primary,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.lightGray,
    fontSize: 10,
    fontFamily: 'Raleway-Medium',
  },
  doneButton: {
    height: 25,
    width: '20%',
    marginVertical: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
