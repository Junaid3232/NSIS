import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const SafetyIndex = ({index, industryName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <Text style={styles.industryN}>{industryName}</Text>
    </View>
  );
};

export default SafetyIndex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 40,
    width: '48%',

    padding: 5,
    marginEnd: 12,
    // marginVertical: 8,
  },
  subContainer: {
    // backgroundColor: 'green',
    borderRadius: 6,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 7,
  },
  industryN: {
    color: '#000',
    fontSize: 12,
    fontWeight: '300',
  },
  index: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
