import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const HeaderText = (
  {
    firstText,
    secondText,
    disabled = true,
    size = 12,
    bold = true,
    onPress,
    color,
    marginLeft,
  },
  props,
) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            ...props,
            ...styles.text,
            fontSize: 20,
            fontWeight: bold ? 'bold' : 'normal',
            fontFamily: bold ? 'Raleway-Black' : 'Raleway-Medium',
            color: color,
            marginLeft: marginLeft,
          }}>
          {`${firstText}, `}
        </Text>
        <Text
          style={{
            ...props,
            ...styles.text,
            fontSize: 20,
            fontWeight: bold ? 'bold' : 'normal',
            fontFamily: bold ? 'Raleway-Black' : 'Raleway-Medium',
            color: colors.primary,
            marginLeft: marginLeft,
          }}>
          {secondText}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {},
});
