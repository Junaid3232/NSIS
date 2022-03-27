import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Alert,
  FlatList,
  ScrollView,
  Dimensions,
  ActivityIndicator,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {
  getIndustryCount,
  getIssueCount,
  getOrganizationCount,
  getAllIssuesCount,
  dashboardData,
} from '../api/getIssuesCount';

const Dashboard = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const [showDetails, setShowDetails] = useState(false);
  const [showMoreIndustryIndex, setShowMoreIndustryIndex] = useState(false);
  const [issueCounts, SetIssueCounts] = useState({});
  const [industryIssueCount, setIndustryIssueCount] = useState(0);
  const [organizationIssueCount, setOrganizationIssueCount] = useState(0);
  const [allIssues, setAllIssue] = useState();
  const [allIssueCount, setAllIssueCount] = useState(0);
  const [allStateforGraph, setAllStateforGraph] = useState();
  const [graphData, setGraphData] = useState();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);

  const getIssuesCount = async token => {
    try {
      const response = await getIssueCount(token);
      if (response) {
        SetIssueCounts(response);
      } else {
        Alert.alert('Error', response?.message);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
      console.log('error is: ', err);
    }
  };
  const getIndustriesCount = async token => {
    try {
      const response = await getIndustryCount(token);
      if (response) {
        setIndustryIssueCount(response?.length);
      } else {
        Alert.alert('Error', response?.message);
        setIndustryIssueCount(0);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
    }
  };
  const getOrganizationsCount = async token => {
    try {
      const response = await getOrganizationCount(token);
      if (response) {
        setOrganizationIssueCount(response?.length);
      } else {
        Alert.alert('Error', response?.message);
        setOrganizationIssueCount(0);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
    }
  };
  const getAllIssueCount = async token => {
    try {
      const response = await getAllIssuesCount(token);
      if (response) {
        setAllIssueCount(response?.length);
        setAllIssue(response);
      } else {
        Alert.alert('Error', response?.message);
        setAllIssueCount(0);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
    }
  };
  const getDashboardData = async token => {
    try {
      // setLoading(true);
      setShowDetails(true);
      const response = await dashboardData(token);
      if (response) {
        setAllStateforGraph(response);
        datafun();
        setShowDetails(false);
        // setLoading(false);
      } else {
        Alert.alert('Error', response?.message);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        getDashboardData(value);
        getIssuesCount(value);
        getIndustriesCount(value);
        getOrganizationsCount(value);
        getAllIssueCount(value);
      }
    } catch (e) {
      console.log('error', e);
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    datafun();
  }, [showDetails]);
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
  const datafun = () => {
    const dataArr = [];
    for (let i = 0; i < allStateforGraph?.length; i++) {
      dataArr.push({
        value:
          allStateforGraph[i]?.active +
          allStateforGraph[i]?.ignored +
          allStateforGraph[i]?.resolved,
        label: allStateforGraph[i]?._id,
        labelComponent: () => laber(allStateforGraph[i]),
        // labelTextStyle: {
        //   color: '#fff',
        //   fontFamily: 'Raleway-Medium',
        //   fontWeight: '500',
        //   fontSize: 10,
        //   transform: [{rotate: '-90deg'}],
        //   position: 'absolute',
        //   bottom: 40,
        //   left: -6,
        // },
      });
      setGraphData(dataArr);
      // console.log('8888888*FORMATED', dataArr);
    }
  };
  const laber = name => {
    if (showDetails) {
      return (
        <View
          style={{
            transform: [{rotate: '-90deg'}],
            position: 'absolute',
            right: 5,
            bottom: 35,
            alignSelf: 'center',
            left: 5,

            borderRadius: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 8,
              fontFamily: 'Raleway-Medium',
              color: 'white',

              width: 140,
            }}>
            {name._id}
          </Text>
        </View>
      );
    } else null;
  };
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
      value: 540,
      label: showDetails ? 'Insurance' : null,
      labelTextStyle: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 10,
        fontWeight: '500',
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        bottom: 45,
        left: -5,
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
                size={10}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.barChartContainer}>
            {!loading ? (
              <BarChart
                data={graphData}
                showGradient={true}
                gradientColor={'#444'}
                // labelWidth={100}
                barWidth={20}
                barBorderRadius={2}
                spacing={12}
                frontColor={colors.primary}
                yAxisThickness={0}
                xAxisThickness={0}
                hideRules
                hideOrigin
                hideYAxisText
                height={140}
                width={windowWidth - 30}
                isAnimated={true}
                onPress={() => console.log('....HIIIII')}
                initialSpacing={0}
                labelr
              />
            ) : (
              <ActivityIndicator size={20} />
            )}
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 12}}>
          <View style={[styles.totalBadges, {marginEnd: 10}]}>
            <TotalReports
              backgroundColor={'#51BA5B'}
              totalText={'Total'}
              name={'Industries'}
              counter={industryIssueCount}
              icon={<Ionicons name="book" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#383b80'}
              totalText={'Total'}
              name={'Reporters'}
              counter={allIssueCount}
              icon={<Fontisto name="world" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#FF17F5'}
              totalText={'Total'}
              name={'Resolved Issue'}
              counter={
                issueCounts.length > 0
                  ? issueCounts?.filter(issue => issue?._id === 'Resolved')[0]
                      ?.sum
                  : 0
              }
              icon={<Fontisto name="world" color={'#fff'} size={20} />}
            />
          </View>
          <View style={styles.totalBadges}>
            <TotalReports
              backgroundColor={'#DA2936'}
              totalText={'Total'}
              name={'Organizations'}
              counter={organizationIssueCount}
              icon={<Fontisto name="world-o" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#E97B40'}
              totalText={'Total'}
              name={'Active Issues'}
              counter={
                issueCounts.length > 0
                  ? issueCounts?.filter(issue => issue?._id === 'Active')[0]
                      ?.sum
                  : 0
              }
              icon={<Feather name="activity" color={'#fff'} size={20} />}
            />
            <TotalReports
              backgroundColor={'#00A863'}
              totalText={'Total'}
              name={'Ignore Issues'}
              counter={
                issueCounts.length > 0
                  ? issueCounts?.filter(issue => issue?._id === 'Ignored')[0]
                      ?.sum
                  : 0
              }
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
            onPress={() => navigation.navigate('IndustrySafety')}
            style={{
              alignItems: 'flex-end',
              marginRight: 15,
              marginBottom: 75,
              marginTop: 5,
            }}>
            <AppText text={'View Full List'} color={'blue'} size={10} />
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
    justifyContent: 'space-between',
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
