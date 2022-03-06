import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppButton = ({
  title,
  onPress,
  fontSize = 14,
  style,
  height = 35,
  width = '60%',
  backgroundColor = colors.primary,
}) => {
  return (
    <View style={{...style, alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          ...styles.button,
          height: height,
          width: width,
          backgroundColor: backgroundColor,
        }}
        onPress={onPress}>
        <Text style={{...styles.buttonText, fontSize: fontSize}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Raleway-Medium',
    // paddingHorizontal:100
  },
});
