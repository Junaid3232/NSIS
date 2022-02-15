import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppText = (
  {text, 
    disabled=true,
    size=size,
    bold,
    onPress
  }) => {
  return (
    <>
      {disabled ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{...styles.text,fontSize:size,fontWeight:bold?'bold':'normal'}}>{text}</Text>
        </View>
      ) : (
        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={onPress}>
          <Text style={{...styles.text,fontSize:size,fontWeight:bold?'bold':'normal'}}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
