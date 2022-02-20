import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TotalReports = ({backgroundColor, totalText, name, counter,icon}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        {icon}
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
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
    alignItems: 'center',
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  container: {
    height: 55,
    width: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
    // marginVertical:15,
    
  },
  totalTxt: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily:'Raleway-Medium'
  },
  counterTxt: {
    color: '#000',
    fontSize: 16,
 
    fontFamily:'Raleway-Medium'

  },
});
