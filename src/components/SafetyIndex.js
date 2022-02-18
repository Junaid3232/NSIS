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
    height: 40,
    width: '48%',
    borderRadius: 3,
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
    padding: 5,
    marginEnd: 12,
    marginVertical: 8,

backgroundColor:colors.lightGray
  },
  subContainer: {
    backgroundColor: 'green',
    borderRadius: 6,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 7,
    shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  },
  industryN: {
    color: '#000',
    fontSize: 12,
    fontWeight: '300',
  },
  index: {
      color: '#fff', 
      fontSize: 14, 
      fontWeight: '600'
    },
});
