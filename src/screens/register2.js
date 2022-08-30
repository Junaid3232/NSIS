import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {screens} from '../config/constants';
import colors from '../config/colors';

const Register2 = ({navigation, route}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
      }}>
      <View style={{}}>
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

          <AppTextBox placeholder={'Email or Username'} />
          <View style={{marginTop: 8}}>
            <AppButton
              title={'SUBMIT'}
              onPress={() => navigation.navigate(screens.Register3)}
            />
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
      <View style={{justifyContent: 'flex-end'}}>
        <View style={{paddingBottom: 15}}>
          <AppText
            text={'No Account? Report Anonymously'}
            color={colors.black}
            size={14}
            disabled={false}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'} />
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
export default Register2;
