import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export const AppButton = ({
  title,
  onPress,
  fontSize = 14,
  style,
  height = 44,
  width = '90%',
  loading = false,
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
        {loading ? (
          <ActivityIndicator size={20} color={colors.white} />
        ) : (
          <Text style={{...styles.buttonText, fontSize: fontSize}}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Raleway-Medium',
    fontWeight: 'bold',
    fontSize: 16,
    // paddingHorizontal:100
  },
});
