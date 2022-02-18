import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';
import colors from '../config/colors';

const notifications = [
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
];

const Notification = ({navigation}) => {

    const[showFilter, setShowFilter] = useState(false)
  return (
    <SafeAreaView style={{zIndex:-1,backgroundColor:'white',flex:1}}>
      <Header navigation={navigation}/>
      <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 12,
          zIndex:-1
        }}>
        <AppText size={16} bold={'bold'} text={'Notifications'} />
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <AppText size={16} text={'Filter'} />
          <TouchableOpacity style={{marginLeft:8}} onPress={() => {setShowFilter(!showFilter)}}>
            <AntDesign name="caretdown" color={colors.black} size={20} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      {showFilter  &&
        <View style={styles.filter}>
        <TouchableOpacity style={{padding:2}} onPress={() => {}}>
        <AppText color={"#fff"}  size={14} text={'Last 7 Days'}/>         
         </TouchableOpacity>
          <TouchableOpacity style={{padding:3}} onPress={() => {}}>
          <AppText color={"#fff"}  size={14} text={'Last Month'}/>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:2}} onPress={() => {}}>
          <AppText color={"#fff"} size={14} text={'Calender Range'}/>
          </TouchableOpacity>
        </View>}
        </View>
      <View style={{paddingHorizontal: 10,  zIndex:-1}}>
        <FlatList
          data={notifications}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate("NotificationDetail")} style={styles.notification}>
                <AppText size={13} bold={'bold'} text={item.title} />
                <View style={{paddingVertical: 5, paddingBottom: 10, zIndex:-1}}>
                  <AppText size={11} text={item.description} />
                </View>
                <AppText size={10} bold={'bold'} text={item.date} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item)=>item.index}
        />
              <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <AppText bold={'bold'} color={'#fff'} text={'LOAD MORE'} />
      </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
marginHorizontal:10,
    borderRadius: 15,
    marginTop:5,
    padding: 15,
    marginVertical: 5,
    zIndex:-1,
    backgroundColor:colors.lightGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
 
  },
  filter:{
      height:110, 
      width:170, 
      backgroundColor:'green', 
      borderRadius:15, 
      padding:15, 
      position:'absolute',
      right:10, 
      top:"90%",
       zIndex:1
    },
    btn: {
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: -10,
        zIndex: 1,
      },
});
