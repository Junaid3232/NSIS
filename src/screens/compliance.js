import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';

const Compliance = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={{paddingHorizontal: 15, paddingVertical: 8}}>
        <AppText bold={'bold'} text={'NDPR / GDPR COMPLIANCE'} />
        <View style={{paddingVertical: 10}}>
          <AppText
            text={
              'The Journal of Safety Research is a multidisciplinary The Journal of Safety Research is a a multidisciplinary The Journal of Safety Research is multidisciplinary The Journal of Safety Research is a multidisciplinary '
            }
          />
        </View>

        <View style={{ paddingTop:15}}>
            <View style={{paddingHorizontal:20, paddingVertical:3}}>
        <AppText
            bold={'bold'}
            color={'blue'}
            text={'By Submitting, You Agree to Term & Conditions'}
          />
          </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Compliance')}>
          <AppText
            bold={'bold'}
            color={'#fff'}
            text={'SUBMIT'}
          />
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Compliance;

const styles = StyleSheet.create({
  btn: {
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    zIndex: 999,
  },
});
