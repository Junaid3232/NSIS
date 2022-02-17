import { View, Text, SafeAreaView,Image,StyleSheet} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import { AppButton } from '../components/AppButton';
import { screens } from '../config/constants';
import colors from '../config/colors';

const Login=({navigation})=> {
  
  return (
    <SafeAreaView style={{flex:1,marginTop:10,paddingHorizontal:20,backgroundColor:colors.white}}>
    <View style={{flex:1}}>
      <View style={{height:400}}>
   <AppCarousel/>
   </View>
   <View style={{alignItems:'center',justifyContent:'flex-start',marginTop:-30}}>
     <Image source={require('../assets/icons/Logo1.png')} style={{width:150,height:60}} />
   </View>
   <View style={{marginTop:10}}>
     <AppText text={'Report Safety Issue'} size={17}  bold={true}/>
     <AppTextBox placeholder={"Email or Username"}/>
     <AppTextBox placeholder={"Password"}/>
     <View style={{marginTop:10}}>
     <AppButton title={'LOGIN'} onPress={()=>{navigation.navigate(screens.Dashboard)}}/>
     </View>
     <View style={styles.forget}>
     <AppText
      text={'Forgot Password'}
       disabled={false} 
       size={13}
       bold={true}
       onPress={()=>{navigation.navigate(screens.ForgotPassword)}}
 
      />
      <AppText
      text={'Create Account'}
       disabled={false} 
       size={13}
       bold={true}
       onPress={()=>{navigation.navigate(screens.Register)}}
      />
      </View>
     <View style={{paddingHorizontal:40,marginTop:20}}>
     <AppText text={'No Account? Report Anonymously'} size={14}  bold={true} disabled={false}/>
     </View>
   </View>
   </View>
   <View style={{justifyContent:'flex-end'}}>
     <AppText text={'Powerd By Softcity Group'} size={12}/>
     </View>
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
export default Login;