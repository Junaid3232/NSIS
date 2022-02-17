import * as React from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/dashboard';
import Drawer from '../drawerNavigation/Drawer';
import colors from '../../config/colors';
import ReportIssue from '../../screens/reportIssue'
import TermsOfUse from '../../screens/termsOfUse'
import AboutNISCN from '../../screens/aboutNISCN'
import Notification from '../../screens/notification'

const Tab = createBottomTabNavigator();
const dashboard = require('../../assets/icons/tabs/dashboard.png');
const bell = require('../../assets/icons/tabs/bell.png');
const about = require('../../assets/icons/tabs/about.png');
const lock = require('../../assets/icons/tabs/padlock.png');
const shield = require('../../assets/icons/tabs/shield.png');

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
         tabBarShowLabel:false,
          tabBarStyle: [
              
            {
              position: 'absolute',
              bottom: 25,
              left: 20,
              right: 20,
              borderRadius: 20,
              elevation: 0,
              height: 80,
              ...styles.shadow,
            },
          ],
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{icon: dashboard}}
          options={{
            tabBarIcon: ({focused, color, size, icon}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
               top:Platform.OS=='ios'?15:5
                  
                }}>
                <Image
                  source={dashboard}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? colors.primary : 'gray',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? colors.primary : 'gray',
                    fontSize: 10,
                    marginTop: 10,
                    fontFamily:'Raleway-Black',
                    fontWeight:'600'
                  }}>
                  Dashboard
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="About NISCN"
          component={AboutNISCN}
          options={{icon: dashboard}}
          options={{
            tabBarIcon: ({focused, color, size, icon}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top:Platform.OS=='ios'?15:5
                }}>
                <Image
                  source={about}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? colors.primary : 'gray',
                    fontFamily:'Raleway-Black',
                    fontWeight:'600'
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? colors.primary : 'gray',
                    fontSize: 10,
                    marginTop: 10,
                    fontFamily:'Raleway-Black',
                    fontWeight:'600'
                  }}>
                  About NISCN
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Report Issue"
          component={ReportIssue}
          options={{icon: dashboard}}
          options={{
            tabBarIcon: ({focused, color, size, icon}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top:Platform.OS=='ios'?15:5
                }}>
                <Image
                  source={shield}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? colors.primary : 'gray',
                    fontFamily:'Raleway-Black',
                    fontWeight:'600'
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? colors.primary : 'gray',
                    fontFamily:'Raleway-Black',
                    fontWeight:'600',
                    fontSize: 10,
                    marginTop: 10,
                  }}>
                  Report Issue
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Terms of Use"
          component={TermsOfUse}
          options={{icon: dashboard}}
          options={{
            tabBarIcon: ({focused, color, size, icon}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top:Platform.OS=='ios'?15:5
                }}>
                <Image
                  source={lock}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? colors.primary : 'gray',
                    fontFamily:'Raleway-Black',
                    fontWeight:'600'
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? colors.primary : 'gray',
                    fontFamily:'Raleway-Black',
                    fontWeight:'600',
                    fontSize: 10,
                    marginTop: 10,
                  }}>
                  Terms of Use
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{icon: dashboard}}
          options={{
            tabBarIcon: ({focused, color, size, icon}) => (
                <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top:Platform.OS=='ios'?15:5
                }}>
                <Image
                  source={bell}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? colors.primary : 'gray',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? colors.primary : 'gray',
                    fontSize: 10,
                    marginTop: 10,
                  }}>
                 Notifications
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

    elevation: 5,
  },
});
export default TabNavigation;
