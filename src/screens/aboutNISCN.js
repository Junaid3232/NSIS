import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, SafeAreaView, Text, View, Image,TouchableOpacity} from 'react-native';
import {AppButton} from '../components/AppButton';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';

const AboutNISCN = ({navigation}) => {
  const image = require('../assets/images/4.jpg');
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.title}>
            <AppText
              color={colors.black}
              text={'About The National Safety Intelligence System'}
              size={14}
            />
          </View>
          <View style={styles.imageView}>
            <Image
              source={image}
              resizeMode={'cover'}
              style={{height: '100%', width: '100%', borderRadius: 10}}
            />
          </View>
          <View style={{paddingBottom: 90, marginBottom: 60}}>
            <Text style={styles.text}>
              The Journal of Safety Research is a multidisciplinary publication
              that provides for the exchange of scientific evidence in all areas
              of safety and health, including traffic, workplace, home, and
              community. While this research forum invites submissions using
              rigorous methodologies in all related he Journal of Safety
              Research is a multidisciplinary publication that provides for the
              exchange of scientific evidence in all areas of safety and health,
              including traffic, workplace, home, and community. While this
              research forum invites submissions using rigorous methodologies in
              all related
            </Text>
          </View>
        </View>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => {}}>
        <AppText color={'#fff'} text={'CONTACT NISCN'} />
      </TouchableOpacity>
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default AboutNISCN;
const styles = StyleSheet.create({
  imageView: {
    height: 355,
  },
  title: {
    paddingVertical: 10,
  },
  text: {
    marginTop: 10,
    color: colors.black,
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  btn: {
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
alignSelf:'center',
width:'90%',
    bottom: "15%",
    zIndex: 999,
    shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
}}
});
