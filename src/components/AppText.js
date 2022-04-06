import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppText = (
  {text, disabled = true, size = 12, bold, onPress, color, marginLeft},
  props,
) => {
  return (
    <>
      {disabled ? (
        <View style={{}}>
          <Text
            style={{
              ...props,
              ...styles.text,
              fontSize: size,
              fontWeight: bold ? 'bold' : 'normal',
              fontFamily: bold ? 'Raleway-Black' : 'Raleway-Medium',
              color: color,
              marginLeft: marginLeft,
            }}>
            {text}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
          <Text
            style={{
              ...styles.text,
              fontSize: size,
              fontWeight: bold ? 'bold' : 'normal',
              fontFamily: bold ? 'Raleway-Black' : 'Raleway-Medium',
              color: color,
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {},
});
