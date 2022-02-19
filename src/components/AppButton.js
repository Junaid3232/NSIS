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
    

    shadowColor: "#000",
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
    fontFamily:'Raleway-Medium',
    // paddingHorizontal:100
  },
});
