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
              placeholder={'Email or username'}
              state={email}
              setState={setEmail}
              iconDirectory={'Fontisto'}
              icon={'email'}
              iconSize={18}
            />
            <View style={{marginTop: 8}}>
              <AppButton
                title={'Submit'}
                onPress={onPressSubmit}
                loading={loading}
              />
            </View>
            <View style={styles.forget}>
              <AppText
                text={'Back to Login'}
                disabled={false}
                color={colors.primary}
                size={13}
                bold={true}
                onPress={() => navigation.navigate(screens.Login)}
              />
            </View>
          </View>

          <View>
            <ErrorModal
              modalVisible={showErrorModal}
              setModalVisible={setShowErrorModal}
              message={errorMessage}
            />
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
