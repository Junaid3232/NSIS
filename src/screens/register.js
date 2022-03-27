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
import {registerEmail} from '../api/register';

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onPressCreate = async () => {
    console.log('PRESSED');
    setLoading(true);
    if (!validator.isEmail(email)) {
      return Alert.alert(
        'Validation Error',
        'Please add a valid email address',
      );
    } else if (validator.isEmpty(firstName)) {
      return Alert.alert('Validation Error', 'Please add First Name');
    } else if (validator.isEmpty(lastName)) {
      return Alert.alert('Validation Error', 'Please Last Name');
    } else if (validator.isEmpty(email)) {
      return Alert.alert('Validation Error', 'Please add password');
    } else if (validator.isEmpty(phone)) {
      return Alert.alert('Validation Error', 'Please add phone');
    } else if (validator.isLength(phone, 12)) {
      return Alert.alert('Validation Error', 'Please add phone');
    } else {
      try {
        const response = await registerEmail({email});

        if (response) {
          console.log('.....RESPONSE', response);
          setLoading(false);
        } else {
        }
      } catch (err) {}

      navigation.navigate(screens.Register3, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      });
    }
  };

  return (
    //
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.white,
      }}>
      <ScrollView>
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
          <View style={{}}>
            <View style={{alignItems: 'center'}}>
              <AppText text={'Create Account'} size={16} color={colors.black} />
            </View>
            <AppTextBox
              placeholder={'First Name'}
              setState={setFirstName}
              keyb
            />
            <AppTextBox placeholder={'Last Name'} setState={setLastName} />
            <AppTextBox
              placeholder={'Valid Email Address'}
              setState={setEmail}
            />
            <AppTextBox placeholder={'Phone Number'} setState={setPhone} />
            <View style={{marginTop: 8}}>
              <AppButton
                title={'CREATE'}
                loading={loading}
                onPress={() => onPressCreate()}
              />
            </View>
            <View style={styles.forget}>
              <AppText
                text={'Back to Login'}
                disabled={false}
                size={13}
                color={colors.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
          <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'} />
        </View>
      </ScrollView>
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
