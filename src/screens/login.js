import {View, Text, SafeAreaView, Image, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {screens} from '../config/constants';
import colors from '../config/colors';
import validator from 'validator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../config/constants';
import {NavigationActions, StackActions} from 'react-navigation';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!validator.isEmail(email)) {
      return Alert.alert(
        'Validation Error',
        'Please add a valid email address',
      );
    } else if (validator.isEmpty(password)) {
      return Alert.alert('Validation Error', 'Please add password');
    } else {
      const body = {
        email,
        password,
      };

      const res = await axios
        .post(`${BASE_URL}/login`, body)
        .then(async response => {
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
          console.log('ERORRRRRRR', error.response);
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 5,
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
            source={require('../assets/icons/Logo1.png')}
            style={{width: 100, height: 50}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <View style={{alignItems: 'center'}}>
            <AppText
              text={'Report Safety Issue'}
              size={16}
              color={colors.black}
            />
          </View>
          <AppTextBox
            placeholder={'Email or Username'}
            state={email}
            setState={setEmail}
          />

          <AppTextBox
            placeholder={'Password'}
            state={password}
            secure={true}
            setState={setPassword}
          />
          <View style={{marginTop: 10}}>
            <AppButton title={'LOGIN'} onPress={() => login()} />
          </View>
          <View style={styles.forget}>
            <AppText
              text={'Forgot Password'}
              disabled={false}
              size={13}
              color={colors.black}
              onPress={() => {
                navigation.navigate(screens.ForgotPassword);
              }}
            />
            <AppText
              text={'Create Account'}
              disabled={false}
              size={13}
              color={colors.black}
              onPress={() => {
                navigation.navigate(screens.Register);
              }}
            />
          </View>
          <View style={{paddingHorizontal: 40, marginTop: 20}}>
            <AppText
              text={'No Account? Report Anonymously'}
              size={14}
              color={colors.black}
              disabled={false}
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
export default Login;
