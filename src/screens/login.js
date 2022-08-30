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
import ErrorModal from '../components/ErrorModal';
import {HeaderText} from '../components/HeaderText';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    if (!validator.isEmail(email)) {
      setErrorMessage('Please add a valid email address');
      setShowErrorModal(true);
      setLoading(false);
    } else if (validator.isEmpty(password)) {
      setErrorMessage('Please add password');
      setShowErrorModal(true);
      setLoading(false);
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
                setLoading(false);
              });
            } catch (e) {
              console.log('errrrrrrr', e);
              // saving error
            }
          }
        })
        .catch(error => {
          setErrorMessage(error?.response?.data);
          setShowErrorModal(true);
          setLoading(false);
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // marginTop: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.primary,
      }}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/images/n1.png')}
          style={{alignSelf: 'center'}}
        />
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: -10,
            left: 15,
            right: 15,
            height: '60%',
            borderRadius: 10,
          }}>
          {/* <AppCarousel /> */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',

              marginTop: 15,
            }}>
            <Image
              source={require('../assets/icons/Logo1.png')}
              style={{width: 150, height: 80}}
            />
          </View>
          <View style={{marginTop: 5}}>
            <View style={{marginLeft: 20, paddingTop: 10}}>
              <HeaderText
                firstText={'Report'}
                secondText={'Safety Issue'}
                size={16}
                color={colors.black}
              />
            </View>
            <View style={{paddingVertical: 20}}>
              <AppTextBox
                placeholder={'Email or Username'}
                icon={'email'}
                state={email}
                setState={setEmail}
                iconDirectory={'Fontisto'}
                iconSize={20}
              />

              <AppTextBox
                placeholder={'Password'}
                icon={'lock'}
                state={password}
                secure={true}
                iconDirectory={'EvilIcons'}
                iconSize={30}
                setState={setPassword}
              />
            </View>
            <View style={{alignSelf: 'flex-end', marginRight: 40}}>
              <AppText
                text={'Forgot Password'}
                disabled={false}
                size={13}
                bold={true}
                color={colors.primary}
                onPress={() => {
                  navigation.navigate(screens.ForgotPassword0);
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <AppButton
                title={'LOGIN'}
                onPress={() => login()}
                loading={loading}
              />
            </View>
            <View style={styles.forget}>
              <AppText
                text={'Create Account'}
                disabled={false}
                size={13}
                color={colors.primary}
                bold={true}
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
                onPress={() => navigation.navigate(screens.Dashboard)}
                disabled={false}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <AppText
                text={'Powerd By Softcity Group'}
                size={12}
                color={'black'}
              />
            </View>
            <ErrorModal
              modalVisible={showErrorModal}
              setModalVisible={setShowErrorModal}
              message={errorMessage}
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
    marginTop: 10,
  },
});
export default Login;
