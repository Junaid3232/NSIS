import { View, Text,Image,Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import colors from '../config/colors';
const AppCarousel=()=> {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const data=[
    {image:require('../assets/images/1.jpg')},
    {image:require('../assets/images/2.jpg')},
    {image:require('../assets/images/3.jpg')},
    {image:require('../assets/images/4.jpg')}]
  const renderItem = ({item, index}) => {
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={item.image} style={{width:windowWidth-30,height:350,borderRadius:20}}/>
        </View>
    );
}
  return (
    <View style={{flex:1,alignItems:'center'}}>
             <Carousel
             autoplay={true}
             enableMomentum={false}
             loop={true}
               data={data}
               renderItem={renderItem}
               sliderWidth={windowWidth}
               itemWidth={350}
             slideStyle={{backgroundColor:'white',height:350}}
             />
    </View>
  )
}

export default AppCarousel;