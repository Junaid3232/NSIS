import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {screens} from '../config/constants';
import colors from '../config/colors';
import validator from 'validator';
import {registerEmail} from '../api/getIssuesCount';
import ErrorModal from '../components/ErrorModal';
import axios from 'axios';
import {BASE_URL} from '../config/constants';
import {HeaderText} from '../components/HeaderText';
const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onPressCreate = async () => {
    setLoading(true);
    if (!validator.isEmail(email)) {
      setErrorText('Please add a valid email address');
      setShowModal(true);
      setLoading(false);
    } else if (validator.isEmpty(firstName)) {
      setErrorText('Please add First Name');
      setShowModal(true);
      setLoading(false);
    } else if (validator.isEmpty(lastName)) {
      setErrorText('Please add Lase Name');
      setShowModal(true);
      setLoading(false);
    } else if (validator.isEmpty(email)) {
      setErrorText('Please add password');
      setShowModal(true);
      setLoading(false);
    } else if (validator.isEmpty(phone)) {
      setErrorText('Please add phone');
      setShowModal(true);
      setLoading(false);
    } else if (validator.isLength(phone, 12)) {
      setErrorText('Please add phone');
      setShowModal(true);
      setLoading(false);
    } else {
      const body = {
        email: email,
      };
      axios
        .post(`${BASE_URL}/signup/confirm`, body)
        .then(async response => {
          if (response) {
            console.log('response.toke', response?.data?.accessToken);
            console.log('response.data', response?.data);
            // console.log(response.data.accessToken);?
            try {
              navigation.navigate(screens.Register3, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
              });
              setLoading(false);
            } catch (e) {
              console.log('errrrrrrr', e);
              // saving error
            }
          }
        })
        .catch(error => {
          setLoading(false);
          setShowModal(true);
          setErrorText(error?.response?.data);
          console.log('ERORRRRRRR', error);
        });
    }
  };

  return (
    //
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: colors.primary,
      }}>
      {/* <ScrollView> */}

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
          <View style={{}}>
            <View style={{marginLeft: 20, paddingVertical: 10}}>
              <HeaderText
                firstText={'Create'}
                secondText={'Account'}
                size={16}
                color={colors.black}
              />
            </View>
            <AppTextBox
              icon={'user-o'}
              iconSize={15}
              placeholder={'First Name'}
              setState={setFirstName}
              iconDirectory={'FontAwesome'}
            />
            <AppTextBox
              icon={'user-o'}
              iconSize={15}
              placeholder={'Last Name'}
              setState={setLastName}
              iconDirectory={'FontAwesome'}
            />
            <AppTextBox
              icon={'email'}
              iconSize={15}
              placeholder={'Email Address'}
              setState={setEmail}
              iconDirectory={'Fontisto'}
            />
            <AppTextBox
              icon={'mobile-phone'}
              iconSize={25}
              placeholder={'Phone Number'}
              setState={setPhone}
              iconDirectory={'FontAwesome'}
            />
            <View style={{marginTop: 8}}>
              <AppButton
                title={'CREATE'}
                loading={loading}
                onPress={() => onPressCreate()}
              />
            </View>
            <View style={styles.forget}>
              <View style={{width: '100%'}}>
                <AppText
                  text={'Back to Login'}
                  disabled={false}
                  size={13}
                  color={colors.primary}
                  bold={true}
                  onPress={() => navigation.goBack()}
                />
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
              <ErrorModal
                modalVisible={showModal}
                setModalVisible={setShowModal}
                message={errorText}
              />
            </View>
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
export default Register;
