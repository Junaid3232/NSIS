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

const ForgotPassword0 = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    setLoading(true);
    if (!validator.isEmail(email)) {
      setErrorMessage('Please add a valid email address');
      setShowErrorModal(true);
      setLoading(false);
    } else {
      const body = {
        email,
      };
      const res = await axios
        .post(`${BASE_URL}/reset/req`, body)
        .then(async response => {
          if (response) {
            try {
              navigation.navigate(screens.ForgotPassword, {email: email});
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
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
      }}>
      <View style={{flex: 1, marginTop: isKeyboardVisible ? 80 : 0}}>
        {!isKeyboardVisible && (
          <View style={{height: 400}}>
            <AppCarousel />
          </View>
        )}
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
            <AppText text={'Reset Password'} color={colors.black} size={16} />
          </View>
          <AppTextBox
            placeholder={'Enter Your Email'}
            state={email}
            setState={setEmail}
          />
          <View style={{marginTop: 8}}>
            <AppButton
              title={'SUBMIT'}
              onPress={onPressSubmit}
              loading={loading}
            />
          </View>
          <View style={styles.forget}>
            <AppText
              text={'Back to Login'}
              disabled={false}
              color={colors.black}
              size={12}
              onPress={() => navigation.navigate(screens.Login)}
            />
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'} />
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
export default ForgotPassword0;
