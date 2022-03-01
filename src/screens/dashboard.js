import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import TotalReports from '../components/TotalReports';
import SafetyIndex from '../components/SafetyIndex';
import {BarChart} from 'react-native-gifted-charts';
import {Header} from '../components/Header';
import {AppText} from '../components/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';
import axios from 'axios';

const Dashboard = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const [showDetails, setShowDetails] = useState(false);
  const [showMoreIndustryIndex, setShowMoreIndustryIndex] = useState(false);

  const industryIndex = [
    {
      id: 0,
      number: 5,
      industryName: 'Telecommunication',
    },
    {
      id: 1,
      number: 6,
      industryName: 'Government',
    },
    {
      id: 2,
      number: 7,
      industryName: 'Banking',
    },
    {
      id: 3,
      number: 8,
      industryName: 'Government',
    },
    {
      id: 4,
      number: 9,
      industryName: 'Government',
    },
    {
      id: 5,
      number: 10,
      industryName: 'Civil Engineering ',
    },
  ];

  const data = [
    {
      value: 540,
      label: showDetails ? 'Banking' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontWeight: '500',
        fontSize: 10,
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 40,
        left: -6,
      },
    },
    {
      value: 700,
      label: showDetails ? 'Telecommunication' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 69,
        left: -35,
      },
    },
    {
      value: 745,
      label: showDetails ? 'Insurance' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 540,
      label: showDetails ? 'Medical' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 40,
        left: -5,
      },
    },
    {
      value: 600,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 540,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 600,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 600,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 550,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 600,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 530,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 600,
      label: showDetails ? 'Pharmacy' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -10,
      },
    },
    {
      value: 640,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 640,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 640,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 640,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
    {
      value: 640,
      label: showDetails ? 'Entertainment' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 55,
        left: -20,
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header dashboard={true} navigation={navigation} />
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 10, zIndex: 999}}>
          <Text style={styles.title}>{'Dashboard'}</Text>
        </View>
        <View style={styles.graphContainer}>
          <View style={styles.subTitle}>
            <AppText text={'Reported Safety Issues By Industry'} />
            <TouchableOpacity
              style={{}}
              onPress={() => setShowDetails(!showDetails)}>
              <AppText
                text={'Show Details'}
                color={showDetails === true ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.barChartContainer}>
            <BarChart
              data={data}
              showGradient={true}
              gradientColor={'#444'}
              labelWidth={100}
              barWidth={20}
              barBorderRadius={2}
              frontColor={colors.primary}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              hideOrigin
              hideYAxisText
              height={140}
              width={windowWidth - 30}
              hideYAxisText
              spacing={6}
              isAnimated={true}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 12}}>
          <View style={[styles.totalBadges, {marginEnd: 10}]}>
            <TotalReports
              backgroundColor={'#51BA5B'}
              totalText={'Total'}
              name={'Industries'}
              counter={'13'}
              icon={<Ionicons name="book" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#383b80'}
              totalText={'Total'}
              name={'Reporters'}
              counter={'143'}
              icon={<Fontisto name="world" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#FF17F5'}
              totalText={'Total'}
              name={'Resolved Issue'}
              counter={'123'}
              icon={<Fontisto name="world" color={'#fff'} size={20} />}
            />
          </View>
          <View style={styles.totalBadges}>
            <TotalReports
              backgroundColor={'#DA2936'}
              totalText={'Total'}
              name={'Organizations'}
              counter={'98'}
              icon={<Fontisto name="world-o" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#E97B40'}
              totalText={'Total'}
              name={'Active Issues'}
              counter={'676'}
              icon={<Feather name="activity" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#00A863'}
              totalText={'Total'}
              name={'Ignore Issues'}
              counter={'511'}
              icon={<Feather name="activity" color={'#fff'} size={20} />}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.safetyText}>
              {'Industry Safety Index (Jan - March 2022)'}
            </Text>
            <View style={styles.QMark}>
              <AppText color={'#fff'} text={'?'} />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <View style={{flexDirection: 'row'}}>
              <SafetyIndex index={1} industryName={'Telecommunication'} />
              <SafetyIndex index={2} industryName={'Government'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <SafetyIndex index={3} industryName={'Banking'} />
              <SafetyIndex index={4} industryName={'Telecommunication'} />
            </View>
          </View>
          {showMoreIndustryIndex && (
            <View style={{}}>
              <FlatList
                data={industryIndex}
                scrollEnabled={false}
                contentContainerStyle={{paddingHorizontal: 12}}
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
          )}
          <TouchableOpacity
            onPress={() => setShowMoreIndustryIndex(!showMoreIndustryIndex)}
            style={{
              alignItems: 'flex-end',
              marginRight: 15,
              marginBottom: 75,
              marginTop: 5,
            }}>
            <AppText
              text={showMoreIndustryIndex ? 'Hide Full List' : 'View Full List'}
              color={'blue'}
              size={10}
            />
          </TouchableOpacity>
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
    fontFamily: 'Raleway-Medium',
  },
  subTitle: {
    color: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  safetyText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 10,
    fontFamily: 'Raleway-Medium',
  },
  graphContainer: {
    paddingHorizontal: 12,
    width: '95%',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
  },
  totalBadges: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  QMark: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  barChartContainer: {
    zIndex: -999,
    shadowColor: '#000',
    marginRight: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
