import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const TotalReports = ({
  backgroundColor = colors.primary,
  totalText,
  name,
  counter,
  icon,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        {icon}
      </View>
      <View style={{justifyContent: 'center', paddingHorizontal: 10}}>
        <Text style={styles.counterTxt}>{counter ? counter : 0}</Text>
        <Text style={styles.totalTxt}>{totalText}</Text>
        <Text style={styles.totalTxt}>{name}</Text>
      </View>
    </View>
  );
};

export default TotalReports;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 2,
    backgroundColor: '#fff',
    width: '100%',

    borderColor: '#dfdfdf',
    alignItems: 'center',
    marginVertical: 4,
    shadowColor: colors.orange,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 10,
  },
  container: {
    height: 40,
    width: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:15,
  },
  totalTxt: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Raleway-Medium',
  },
  counterTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',

    fontFamily: 'Raleway-Medium',
  },
});
