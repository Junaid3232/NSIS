import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppText} from './AppText';
import {screens} from '../config/constants';
import {CommonActions} from '@react-navigation/native';

export const Header = ({dashboard = false, navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log('....vallue', value);
      if (value !== null) {
        setIsLogin(true);
        console.log('tokennn', value);
      } else {
        setIsLogin(false);
      }
    } catch (e) {
      console.log('error', e);
      // error reading value
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {dashboard ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="menu" color={colors.black} size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="caretleft" color={colors.black} size={20} />
          </TouchableOpacity>
        )}
        <Image
          source={require('../assets/icons/Logo1.png')}
          resizeMode="contain"
          style={{width: 80, height: 50}}
        />

        {isLogin ? (
          <Image
            source={require('../assets/images/1.jpg')}
            style={styles.profilePic}
          />
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Login'}],
                }),
              )
            }>
            <Text style={{color: colors.primary}}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

    elevation: 5,
    backgroundColor: colors.lightGray,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  header: {
    flexDirection: 'row',
    borderColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  profilePic: {width: 40, height: 40, borderRadius: 20},
});
