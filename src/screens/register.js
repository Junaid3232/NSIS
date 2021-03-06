import { View, Text, SafeAreaView,Image,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import { AppButton } from '../components/AppButton';
import { screens } from '../config/constants';
import colors from '../config/colors';

const Register=({navigation})=> {
  return ( //
    <SafeAreaView style={{flex:1,marginTop:10,paddingHorizontal:5,backgroundColor:colors.white}}>
      <ScrollView>
    <View style={{flex:1}}>
      <View style={{height:400}}>
   <AppCarousel/>
   </View>
   <View style={{alignItems:'center',justifyContent:'flex-start',marginTop:-40}}>
     <Image resizeMode='contain' source={require('../assets/icons/Logo1.png')} style={{width:100,height:50}} />
   </View>
   <View style={{}}>
     <View style={{alignItems:'center'}}>
     <AppText text={'Create Account'} size={16} color={colors.black}/>
     </View>
     <AppTextBox placeholder={"First Name"}/>
     <AppTextBox placeholder={"Last Name"}/>
     <AppTextBox placeholder={"Valid Email Address"}/>
     <AppTextBox placeholder={"Phone Number"}/>
     <View style={{marginTop:8}}>
     <AppButton title={'CREATE'} onPress={()=>{navigation.navigate(screens.Register2)}}/>
     </View>
     <View style={styles.forget}>
     <AppText
      text={'Back to Login'}
       disabled={false} 
       size={13}
       color={colors.black}
       onPress={()=>navigation.goBack()}
      />
      </View>

   </View>
   </View>
   <View style={{justifyContent:'flex-end',alignItems:'center'}}>
     <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'}/>
     </View>
     </ScrollView>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  forget:{
flexDirection:'row',
paddingHorizontal:60,
justifyContent:'space-around',
marginTop:10

  }
})
export default Register;