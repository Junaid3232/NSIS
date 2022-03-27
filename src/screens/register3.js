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

const Register3 = ({navigation, route}) => {
  console.log('.....PARAMS', route.params.user);
  const {firstName, lastName, phone, email} = route?.params;
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onRegister = async () => {
    console.log('....FUNCTIO CALLED');
    if (password !== confirmPassword) {
      return Alert.alert('Validation Error', 'Password mismatch');
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
          console.log('respooooooooo', response.body);
          if (response) {
            // console.log(response.data.accessToken);?
            try {
              await AsyncStorage.setItem(
                'token',
                response?.data?.accessToken,
              ).then(() => {
                navigation.navigate(screens.Dashboard);
              });
            } catch (e) {
              console.log('errrrrrrr', e);
              // saving error
            }
          }
        })
        .catch(error => {
          console.log('ERORRRRRRR', error.response.data);
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
            <AppButton title={'COMPLETE'} onPress={onRegister} />
          </View>
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
