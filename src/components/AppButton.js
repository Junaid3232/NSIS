import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppButton = ({title,onPress}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
   width:'60%',
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,

  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    // paddingHorizontal:100
  },
});
