import React from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, SafeAreaView ,Text, View , Image} from 'react-native'
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';

const AboutNISCN = ({navigation}) => {
    const image = require('../assets/images/4.jpg');
    return (
        <SafeAreaView style={{backgroundColor:'white',height:'100%'}} >
            <Header navigation={navigation}/>
            <View style={{paddingHorizontal:15}}>
                <View style={styles.title}>
                <AppText bold={'bold'} text={"About The National Safety Intelligence System"}/>
                </View>
            <View style={styles.imageView}>
            <Image
            source={image}
            resizeMode={'cover'}
            style={{height:"100%", width:"100%",borderRadius:10}}/>
            </View>

                <Text style={styles.text}>The Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related he Journal of Safety Research is a multidisciplinary publication that provides for the exchange of scientific evidence in all areas of safety and health, including traffic, workplace, home, and community. While this research forum invites submissions using rigorous methodologies in all related</Text>
    
            </View>
        </SafeAreaView>
    )
}

export default AboutNISCN
const styles = StyleSheet.create({
    imageView:{
        height:355
    },
    title:{
        paddingVertical:10
    },
    text: {
   marginTop:10,
        color: colors.black,
        fontFamily:'Raleway-Black',
        fontWeight:'400',
        fontSize:12
        
      },
})
