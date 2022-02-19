import { View, Text, SafeAreaView,Image,StyleSheet} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import { AppButton } from '../components/AppButton';
import { screens } from '../config/constants';
import colors from '../config/colors';

const Register2=({navigation})=> {
  return (
    <SafeAreaView style={{flex:1,marginTop:10,paddingHorizontal:20,backgroundColor:colors.white}}>
    <View style={{flex:1}}>
      <View style={{height:400}}>
   <AppCarousel/>
   </View>
   <View style={{alignItems:'center',justifyContent:'flex-start',marginTop:-30}}>
     <Image resizeMode='contain' source={require('../assets/icons/Logo1.png')} style={{width:150,height:60}} />
   </View>
   <View style={{marginTop:10}}>
     <View style={{alignItems:'center'}}>
     <AppText text={'Complete Account Creation'} size={17}/>
     </View>
     <AppTextBox placeholder={"Email or Username"}/>
     <View style={{marginTop:8}}>
     <AppButton title={'SUBMIT'} onPress={()=>navigation.navigate(screens.Register3)}/>
     </View>
     <View style={styles.forget}>
     <AppText
      text={'Back to Login'}
       disabled={false} 
       size={12}
       onPress={()=>navigation.navigate(screens.Login)}
      />
      </View>

   </View>
   </View>
   <View style={{justifyContent:'flex-end'}}>
       <View style={{paddingBottom:15}}>
       <AppText text={'No Account? Report Anonymously'} size={14} disabled={false}/>
       </View>
       <View style={{alignItems:'center'}}>
     <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'}/>
     </View>
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
export default Register2;