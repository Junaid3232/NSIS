import { View, Text, SafeAreaView,Image,StyleSheet,KeyboardAvoidingView,Keyboard} from 'react-native'
import React,{useEffect,useState} from 'react'
import Carousel from 'react-native-snap-carousel';
import AppCarousel from '../components/AppCarousel';
import {AppTextBox} from '../components/AppTextBox';
import {AppText} from '../components/AppText';
import { AppButton } from '../components/AppButton';
import { screens } from '../config/constants';
import colors from '../config/colors';


const ForgotPassword=({navigation})=> {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true); // or some other action
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false); // or some other action
        },
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  

  
  return (
    <SafeAreaView style={{flex:1,marginTop:10,paddingHorizontal:20,backgroundColor:colors.white}}>
    <View style={{flex:1,marginTop:isKeyboardVisible ? 80 :0}}>
   {!isKeyboardVisible &&   <View style={{height:400}}>
   <AppCarousel/>
   </View> }
   <View style={{alignItems:'center',justifyContent:'flex-start',marginTop:-30}}>
     <Image resizeMode='contain' source={require('../assets/icons/Logo1.png')} style={{width:150,height:60}} />
   </View>
   <View style={{marginTop:10}}>
     <View style={{alignItems:'center'}}>
     <AppText text={'Reset Password'} size={16}/>
     </View>
     <AppTextBox placeholder={"Enter Code Sent to Your Email"}/>
     <AppTextBox placeholder={"Enter Ner Password"}/>
     <AppTextBox placeholder={"Confirm Your Password"}/>
     <View style={{marginTop:8}}>
     <AppButton title={'COMPLETE'}/>
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
   <View style={{justifyContent:'flex-end',alignItems:'center'}}>
     <AppText text={'Powerd By Softcity Group'} size={8} color={'gray'}/>
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
export default ForgotPassword;