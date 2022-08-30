import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AppTextBox = ({
  placeholder,
  state,
  setState,
  secure = false,
  props,
  iconDirectory,
  icon,
  iconSize = 20,
  iconColor = 'gray',
}) => {
  return (
    <View style={styles.container}>
      {iconDirectory == 'FontAwesome' ? (
        <FontAwesome
          name={icon}
          color={iconColor}
          size={iconSize}
          style={{marginLeft: 15}}
        />
      ) : iconDirectory == 'Fontisto' ? (
        <Fontisto
          name={icon}
          size={iconSize}
          color={iconColor}
          style={{marginLeft: 15}}
        />
      ) : iconDirectory == 'EvilIcons' ? (
        <EvilIcons
          name={icon}
          size={iconSize}
          color={iconColor}
          style={{marginLeft: 15}}
        />
      ) : iconDirectory == 'Ionicons' ? (
        <Ionicons
          name={icon}
          size={iconSize}
          color={iconColor}
          style={{marginLeft: 15}}
        />
      ) : null}
      <TextInput
        style={styles.textBox}
        placeholder={placeholder}
        secureTextEntry={secure}
        placeholderTextColor={colors.gray}
        keyboardType={'name-phone-pad'}
        onChangeText={value => {
          setState(value);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 6,
    flexDirection: 'row',
    width: '90%',
    height: 44,
    borderColor: colors.grayBorder,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  textBox: {
    // paddingVertical: 10,
    width: '80%',
    // height: 35,
    // borderWidth: 0.5,
    // borderRadius: 4,
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // backgroundColor: colors.white,
    // fontSize: 12,
    fontFamily: 'Raleway-Medium',
    marginLeft: 15,
    color: colors.black,
    // borderColor: colors.grayBorder,
  },
});
