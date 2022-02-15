import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TotalReports = ({backgroundColor, totalText, name, counter}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        {/* <Text>fff</Text> */}
      </View>
      <View style={{justifyContent: 'center', paddingHorizontal: 5}}>
        <Text style={styles.totalTxt}>{totalText}</Text>
        <Text style={styles.totalTxt}>{name}</Text>
        <Text style={styles.counterTxt}>{counter}</Text>
      </View>
    </View>
  );
};

export default TotalReports;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#dfdfdf',

    alignItems: 'center',
    marginVertical: 4,
  },
  container: {
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:15,
  },
  totalTxt: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
  },
  counterTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
});
