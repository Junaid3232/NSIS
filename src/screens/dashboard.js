import React, { useState } from 'react';
import {StyleSheet,SafeAreaView, TouchableOpacity, Text, View, FlatList, ScrollView} from 'react-native';
import TotalReports from '../components/TotalReports';
import SafetyIndex from '../components/SafetyIndex';
import {BarChart} from 'react-native-gifted-charts';
import { Header } from '../components/Header';
import { AppText } from '../components/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'



const Dashboard = ({navigation}) => {

  const [showDetails, setShowDetails] = useState(false)

  const industryIndex = [
    {
      id: 0,
      number: 1,
      industryName: 'Telecommunication',
    },
    {
      id: 1,
      number: 2,
      industryName: 'Government',
    },
    {
      id: 2,
      number: 3,
      industryName: 'Banking',
    },
    {
      id: 3,
      number: 4,
      industryName: 'Government',
    },
    {
      id: 4,
      number: 5,
      industryName: 'Government',
    },
    {
      id: 5,
      number: 6,
      industryName: 'Civil Engineering ',
    },
  ];

  const data = [
    {value: 540,labelWidth: 100, label:showDetails ?  'Banking': null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black',fontWeight:'400',fontSize:13, transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-11}},
        {value: 500,labelWidth: 100, label: showDetails ? 'Telecommunication':null , labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black',fontWeight:'400', transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-31}},
        {value: 745,labelWidth: 100, label: showDetails ? 'Insurance':null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black', fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-16}},
        {value: 540, labelWidth: 100, label: showDetails ? 'Medical':null, labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-11}},
        {value: 600, labelWidth: 100, label: showDetails ? 'Pharmacy':null, labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-17}},
        {value: 540,labelWidth: 100, label:showDetails ?  'Pharmacy':null, labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-16}},
        {value: 600,labelWidth: 100, label: showDetails ?'Entertainment':null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black',fontWeight:'400', transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-31}},
        {value: 600,labelWidth: 100, label: showDetails ?'Pharmacy':null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black',fontWeight:'400', transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-19}},
        {value: 550,labelWidth: 100, label:showDetails ? 'Pharmacy':null, labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-18}},
        {value: 600,labelWidth: 100, label:showDetails ? 'Entertainment':null,labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-31}},
        {value: 530,labelWidth: 100, label: showDetails ?'Pharmacy':null,labelTextStyle:{color:"#fff", fontFamily:'Raleway-Black',fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-18}},
        {value: 600,labelWidth: 100, label: showDetails ?'Pharmacy':null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black', fontWeight:'400',transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-18}},
        {value: 640,labelWidth: 100, label: showDetails ?'Entertainment':null, labelTextStyle:{color:"#fff",fontFamily:'Raleway-Black', fontWeight:'400', transform: [{ rotate: '-90deg'}], position:'absolute', bottom:80, left:-31}},
  ];

  return (
    <SafeAreaView style={styles.container}>
        <Header dashboard={true} navigation={navigation}/>
        <ScrollView style={{paddingHorizontal:15, marginBottom:'25%'}}>
          <View style={{paddingTop:10, zIndex:999}}>
          <Text style={styles.title}>{'Dashboard'}</Text>
          </View>
      <View style={styles.graphContainer}>
        <View style={styles.subTitle}>
          <AppText text={'Reported Safety Issues By Industry'}/>
          <TouchableOpacity style={{}} onPress={()=>setShowDetails(!showDetails)}>
          <AppText text={'Show Details'} color={showDetails === true? "red": "black"} />
          </TouchableOpacity>
        </View>
        
        <View style={{marginLeft:"-20%", zIndex:-999}}>
        <BarChart
          data={data}
          barWidth={20}
          noOfSections={3}
          barBorderRadius={2}
          frontColor="green"
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          hideOrigin
          hideYAxisText
          height={140}
          width={420}
         hideYAxisText
         spacing={6}
        //  isAnimated
         
        //   style={{marginLeft:-20}}
        />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.totalBadges, {marginEnd: 10}]}>
          <TotalReports
            backgroundColor={'#51BA5B'}
            totalText={'Total'}
            name={'Industries'}
            counter={'123'}
            icon={  <Ionicons name="book" color={"#fff"} size={30} /> }
          />
          <TotalReports
            backgroundColor={'#383b80'}
            totalText={'Total'}
            name={'Reporters'}
            counter={'123'}
            icon={  <Fontisto name="world" color={"#fff"} size={30} /> }
          />
          <TotalReports
            backgroundColor={'#FF17F5'}
            totalText={'Total'}
            name={'Resolved Issue'}
            counter={'123'}
            icon={  <Fontisto name="world" color={"#fff"} size={30} /> }
          />
        </View>
        <View style={styles.totalBadges}>
          <TotalReports
            backgroundColor={'#DA2936'}
            totalText={'Total'}
            name={'Organizationa'}
            counter={'123'}
            icon={  <Fontisto name="world-o" color={"#fff"} size={30} /> }
          />
          <TotalReports
            backgroundColor={'#E97B40'}
            totalText={'Total'}
            name={'Active Issues'}
            counter={'123'}
            icon={  <Feather name="activity" color={"#fff"} size={40} /> }

          />
          <TotalReports
            backgroundColor={'#00A863'}
            totalText={'Total'}
            name={'Ignore Issues'}
            counter={'123'}
            icon={  <Feather name="activity" color={"#fff"} size={40} /> }
          />
        </View>
      </View>
      <View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.safetyText}>
          {'Industry Safety Index (Jan - MArch 2022)'}
        </Text>
        <View  style={styles.QMark}>
        <AppText bold={'bold'} color={"#fff"} text={"?"}/>
        </View>
        </View>
        <View>
          <FlatList
            data={industryIndex}
            renderItem={({item}) => {
              return (
                <SafetyIndex
                  index={item.number}
                  industryName={item.industryName}
                />
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
    marginLeft: 10,
  },
  subTitle: {
    color: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  safetyText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 10,
    fontFamily:'Raleway-Black'
  },
  graphContainer: {
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
  },
  totalBadges: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  QMark:{
    height:20,
    width:20,
    borderRadius:10,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10
  }
});
