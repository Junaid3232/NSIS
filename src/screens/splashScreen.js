import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../config/colors';
import Loader from 'react-native-three-dots-loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        nav(value);
      } else if (value === null) {
        nav(null);
      }
    } catch (e) {
      console.log('error', e);
    }
  };
  const nav = token => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {name: token ? 'Dashboard' : 'Login', params: {token: 'token'}},
          ],
        }),
      );
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.constainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/icons/icon.png')}
          style={{width: 80, height: 80}}
        />
      </View>
      <View style={styles.loader}>
        <Loader />
      </View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {flex: 8, justifyContent: 'center', alignItems: 'center'},
  loader: {flex: 2, justifyContent: 'center', alignItems: 'center'},
});
