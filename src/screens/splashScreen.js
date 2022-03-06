import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../config/colors';
import Loader from 'react-native-three-dots-loader';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.constainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/icons/icon.png')}
          style={{width: 80, height: 80}}
        />
      </View>
      <View style={styles.loader}>
        <Loader />
      </View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {flex: 8, justifyContent: 'center', alignItems: 'center'},
  loader: {flex: 2, justifyContent: 'center', alignItems: 'center'},
});
