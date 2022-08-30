import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {BASE_URL, screens} from '../config/constants';
import colors from '../config/colors';
import validator from 'validator';
import axios from 'axios';
import ErrorModal from '../components/ErrorModal';
import {HeaderText} from '../components/HeaderText';

const ForgotPassword = ({navigation, route}) => {
  const email = route?.params?.email;
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onPressSubmit = async () => {
    console.log('...inside function');
    try {
      setLoading(true);
      if (password !== confirmPassword) {
        setErrorMessage('Passwords are not matching');
        setShowErrorModal(true);
        setLoading(false);
      } else if (password == '' || confirmPassword == '' || code == '') {
        setErrorMessage('Fill all fields');
        setShowErrorModal(true);
        setLoading(false);
      } else {
        const body = {
          code,
          email,
          password,
        };
        console.log(body);
        const res = await axios
          .post(`${BASE_URL}/reset/newpassword`, body)
          .then(async response => {
            console.log('.....is resp', response);
            if (response) {
              console.log('...inside');
              console.log('....resp', response.data);
              try {
                navigation.navigate(screens.Login);
              } catch (e) {
                console.log('errrrrrrr', e);
              }
            }
          })
          .then(data => console.log('...wnd res', data))
          .catch(error => {
            setErrorMessage(error?.response?.data);
            setShowErrorModal(true);
            setLoading(false);
          });
      }
    } catch (e) {
      console.log('catch erro', e);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,

        paddingHorizontal: 20,
        backgroundColor: colors.primary,
      }}>
      <Image
        source={require('../assets/images/n2.png')}
        style={{alignSelf: 'center'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 20,
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
        <View style={{marginTop: 5}}>
          <View style={{marginLeft: 20, paddingVertical: 10}}>
            <HeaderText
              firstText={'Reset'}
              secondText={'Password'}
              size={16}
              color={colors.black}
            />
          </View>
          <AppTextBox
            placeholder={'Enter Code Sent to Your Email'}
            state={code}
            setState={setCode}
            icon={'key-outline'}
            iconDirectory={'Ionicons'}
          />
          <AppTextBox
            placeholder={'Enter New Password'}
            secure={true}
            state={password}
            setState={setPassword}
            iconDirectory={'Fontisto'}
            icon={'email'}
          />
          <AppTextBox
            placeholder={'Confirm Your Password'}
            state={confirmPassword}
            secure={true}
            setState={setConfirmPassword}
            icon={'key-outline'}
            iconDirectory={'Ionicons'}
          />
          <View style={{marginTop: 8}}>
            <AppButton
              title={'Complete'}
              onPress={onPressSubmit}
              loading={loading}
            />
          </View>
          <View style={styles.forget}>
            <AppText
              text={'Back to Login'}
              disabled={false}
              color={colors.primary}
              size={12}
              bold={true}
              onPress={() => navigation.navigate(screens.Login)}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
        }}>
        <AppText text={'Powerd By Softcity Group'} size={12} color={'gray'} />
      </View>
      <View>
        <ErrorModal
          modalVisible={showErrorModal}
          setModalVisible={setShowErrorModal}
          message={errorMessage}
        />
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
export default ForgotPassword;
