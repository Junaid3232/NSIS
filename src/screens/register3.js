import {View, Text, SafeAreaView, Image, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {BASE_URL, screens} from '../config/constants';
import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {register} from '../api/register';
import validator from 'validator';
import axios from 'axios';
import ErrorModal from '../components/ErrorModal';
import {HeaderText} from '../components/HeaderText';

const Register3 = ({navigation, route}) => {
  const {firstName, lastName, phone, email} = route?.params;
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    console.log('....FUNCTIO CALLED');
    setLoading(true);

    if (password !== confirmPassword) {
      setErrorMessage('Password mismatch');
      setShowErrorModal(true);
      setLoading(false);
      return;
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        phone,
        code,
      };

      axios
        .post(`${BASE_URL}/signup`, body)
        .then(async response => {
          if (response) {
            console.log('response.toke', response?.data?.accessToken);
            console.log('response.data', response?.data);
            // console.log(response.data.accessToken);?
            if (response?.data?.accessToken !== undefined) {
              await AsyncStorage.setItem('token', response?.data?.accessToken);
            }
            navigation.navigate(screens.Login);
          }
        })
        .catch(error => {
          setLoading(false);
          setShowErrorModal(true);
          setErrorMessage(error?.response?.data);
          console.log('ERORRRRRRR', error?.response?.data);
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        paddingHorizontal: 20,
        backgroundColor: colors.primary,
      }}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Image
          source={require('../assets/images/n1.png')}
          style={{alignSelf: 'center'}}
        />
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 1,
            left: 15,
            right: 15,
            height: '65%',
            borderRadius: 10,
          }}>
          {/* <AppCarousel /> */}

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              resizeMode="contain"
              source={require('../assets/icons/Logo1.png')}
              style={{width: 150, height: 80}}
            />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <View style={{marginLeft: 20, paddingVertical: 10}}>
            <HeaderText
              firstText={'Complete'}
              secondText={'Account Creation'}
              size={16}
              color={colors.black}
            />
          </View>
          {/* icon={'qrcode'}
              iconSize={15}
              placeholder={'First Name'}
              setState={setFirstName}
              iconDirectory={'AntDesign'} */}
          <AppTextBox
            icon={'qrcode'}
            placeholder={'Enter Code Sent to Your Email'}
            state={code}
            setState={setCode}
            iconSize={20}
            iconDirectory={'FontAwesome'}
          />

          <AppTextBox
            placeholder={'Set Your Password'}
            state={password}
            setState={setPassword}
            icon={'key-outline'}
            iconDirectory={'Ionicons'}
          />
          <AppTextBox
            placeholder={'Confirm Your Password'}
            state={confirmPassword}
            setState={setConfirmPassword}
            icon={'key-outline'}
            iconDirectory={'Ionicons'}
          />
          <View style={{marginTop: 8}}>
            <AppButton
              title={'Complete'}
              onPress={onRegister}
              loading={loading}
            />
          </View>
          <ErrorModal
            modalVisible={showErrorModal}
            setModalVisible={setShowErrorModal}
            message={errorMessage}
          />
          <View style={styles.forget}>
            <AppText
              text={'Back to Login'}
              disabled={false}
              size={13}
              bold={true}
              color={colors.primary}
              onPress={() => navigation.navigate(screens.Login)}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <AppText
              text={'Powerd By Softcity Group'}
              size={12}
              color={'gray'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  forget: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    justifyContent: 'space-around',
  },
});
export default Register3;
