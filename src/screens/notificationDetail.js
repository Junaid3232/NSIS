import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';
import colors from '../config/colors';

const NotificationDetail = ({navigation}) => {
  const image = require('../assets/images/4.jpg');
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.white}}>
      <Header navigation={navigation} />
      <ScrollView style={{paddingHorizontal: 15}}>
        <View style={styles.title}>
          <AppText color={colors.black} text={'NISCN Enforces Safety In Calabar'} />
        </View>
        <View style={styles.imageView}>
          <Image
            source={image}
            resizeMode={'cover'}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.title}>
          <AppText
            text={
              'The Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related he Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related …'
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Notifications')}>
        <AppText  color={'#fff'} text={'CLOSE'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NotificationDetail;
const styles = StyleSheet.create({
  imageView: {
    height: 355,
  },
  title: {
    paddingVertical: 10,
  },
  btn: {
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    bottom: '5%',
    left: 15,
    right: 15,
  },
});
