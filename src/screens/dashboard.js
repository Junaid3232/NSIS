import React, { useState } from 'react';
import {StyleSheet,SafeAreaView, TouchableOpacity, Text, View, FlatList, ScrollView} from 'react-native';
import TotalReports from '../components/TotalReports';
import SafetyIndex from '../components/SafetyIndex';
import {BarChart} from 'react-native-gifted-charts';
import { Header } from '../components/Header';
import { AppText } from '../components/AppText';

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
    {value: 250, label: 'M'},
        {value: 500, label: 'T',},
        {value: 745, label: 'W'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
        {value: 600, label: 'F'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
        {value: 300, label: 'S'},
        {value: 600, label: 'F'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
  
  ];

  return (
    <SafeAreaView style={styles.container}>
        <Header dashboard={true} navigation={navigation}/>
        <ScrollView style={{paddingHorizontal:15, marginBottom:'25%'}}>
        <Text style={styles.title}>{'Dashboard'}</Text>
      <View style={styles.graphContainer}>
        <View style={styles.subTitle}>
          <AppText text={'Reported Safety Issues By Industry'}/>
          <AppText disabled={false} text={'Show Details'} color={showDetails === true? "red": "black"} onPress={()=>setShowDetails(!showDetails)}/>
        </View>
        <View style={{marginLeft:"-21%"}}>
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
         hideYAxisText
         spacing={8}
         isAnimated
         
        //   style={{marginLeft:-20}}
        />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.totalBadges, {marginEnd: 10}]}>
          <TotalReports
            backgroundColor={'lightgreen'}
            totalText={'Total'}
            name={'Industries'}
            counter={'123'}
          />
          <TotalReports
            backgroundColor={'lightgreen'}
            totalText={'Total'}
            name={'Reporters'}
            counter={'123'}
          />
          <TotalReports
            backgroundColor={'lightgreen'}
            totalText={'Total'}
            name={'Resolved Issue'}
            counter={'123'}
          />
        </View>
        <View style={styles.totalBadges}>
          <TotalReports
            backgroundColor={'pink'}
            totalText={'Total'}
            name={'Organizationa'}
            counter={'123'}
          />
          <TotalReports
            backgroundColor={'lightgreen'}
            totalText={'Total'}
            name={'Active Issues'}
            counter={'123'}
          />
          <TotalReports
            backgroundColor={'orange'}
            totalText={'Total'}
            name={'Ignore Issues'}
            counter={'123'}
          />
        </View>
      </View>
      <View>
        <Text style={styles.safetyText}>
          {'Industry Safety Index (Jan - MArch 2022)'}
        </Text>
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
  },
  graphContainer: {
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
    // marginLeft:"-%"
  },
  totalBadges: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
});
