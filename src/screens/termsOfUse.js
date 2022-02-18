import React from 'react'
import { ScrollView,TouchableOpacity } from 'react-native';
import { StyleSheet, SafeAreaView ,Text, View , Image} from 'react-native'
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';
import colors from '../config/colors';

const TermsOfUse = ({navigation}) => {
    const image = require('../assets/images/4.jpg');
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
            <Header navigation={navigation}/>
            <View style={{paddingHorizontal:15}}>
                <View style={styles.title}>
                <AppText bold={'bold'} text={"Terms Of Use"}/>
                </View>
           
            <View style={styles.title}>
                <AppText text={"The Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related he Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related …The Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related he Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related …"}/>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Compliance")}>
        <AppText color={'#fff'} text={'NDPR / GDPR COMPLIANCE'} />
      </TouchableOpacity>
        </SafeAreaView>
    )
}

export default TermsOfUse

const styles = StyleSheet.create({
    imageView:{
        height:355
    },
    title:{
        paddingTop:10
    },
    btn: {
        height: 40,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: "15%",
        zIndex: 999,
        shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
 
      },
})
