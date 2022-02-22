import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppTextBox = ({placeholder, state, setState, secure = false}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder={placeholder}
        secureTextEntry={secure}
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
  },
  textBox: {
    paddingVertical: 10,
    width: '60%',
    height: 35,
    borderColor: colors.primary,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.lightGray,
    fontSize: 12,
    fontFamily: 'Raleway-Medium',
  },
});
