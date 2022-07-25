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
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
      }}>
      <View style={{flex: 1}}>
        <View style={{height: 400}}>
          <AppCarousel />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: -40,
          }}>
          <Image
            resizeMode="contain"
            source={require('../assets/icons/Logo1.png')}
            style={{width: 100, height: 50}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <View style={{alignItems: 'center'}}>
            <AppText
              text={'Complete Account Creation'}
              color={colors.black}
              size={16}
            />
          </View>
          <AppTextBox
            placeholder={'Enter Code Sent to Your Email'}
            state={code}
            setState={setCode}
          />
          <AppTextBox
            placeholder={'Set Your Password'}
            state={password}
            setState={setPassword}
          />
          <AppTextBox
            placeholder={'Confirm Your Password'}
            state={confirmPassword}
            setState={setConfirmPassword}
          />
          <View style={{marginTop: 8}}>
            <AppButton
              title={'COMPLETE'}
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
              color={colors.black}
              onPress={() => navigation.navigate(screens.Login)}
            />
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  forget: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
export default Register3;
