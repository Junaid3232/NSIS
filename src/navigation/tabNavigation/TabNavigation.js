import * as React from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/dashboard';
import Drawer from '../drawerNavigation/Drawer';
import colors from '../../config/colors';
import ReportIssue from '../../screens/reportIssue';
import TermsOfUse from '../../screens/termsOfUse';
import AboutNISCN from '../../screens/aboutNISCN';
import Notification from '../../screens/notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const dashboard = require('../../assets/icons/tabs/dashboard.png');
const bell = require('../../assets/icons/tabs/bell.png');
const about = require('../../assets/icons/tabs/about.png');
const lock = require('../../assets/icons/tabs/padlock.png');
const shield = require('../../assets/icons/tabs/Vector.png');
const reception = require('../../assets/icons/tabs/reception.png');
const notification = require('../../assets/icons/tabs/notification.png');
const checks = require('../../assets/icons/tabs/checks.png');

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            // position: 'absolute',
            // left: 8,
            // right: 8,
            borderRadius: 30,
            shadowColor: colors.primary,
            // paddingTop: 20,
            elevation: 5,
            // height: 80,
            // elevation: 10,
            backgroundColor: colors.white,
            ...styles.shadow,
          },
        ],
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color, size, icon}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={dashboard}
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? colors.primary : 'gray',
                }}
                resizeMode={'contain'}
              />
              {/* <Text
                style={{
                  color: focused ? colors.primary : 'gray',
                  fontSize: 10,
                  marginTop: 10,
                  fontFamily: 'Raleway-Medium',
                }}>
                Dashboard
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About NISCN"
        component={AboutNISCN}
        options={{
          tabBarIcon: ({focused, color, size, icon}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={reception}
                style={{
                  width: 60,
                  height: 60,
                  tintColor: focused ? colors.primary : 'gray',
                }}
                resizeMode={'contain'}
              />
              {/* <Text
                style={{
                  color: focused ? colors.primary : 'gray',
                  fontSize: 10,
                  marginTop: 10,
                  fontFamily: 'Raleway-Medium',
                }}>
                About NISCN
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Report Issue"
        component={ReportIssue}
        options={{
          tabBarIcon: ({focused, color, size, icon}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // top: 3,
              }}>
              <MaterialCommunityIcons
                name="plus-circle"
                color={colors.orange}
                size={35}
              />
              <Text
                style={{
                  color: 'gray',
                  fontFamily: 'Raleway-Medium',
                  fontSize: 12,
                  // marginTop: 2,
                }}>
                Guest
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Terms of Use"
        component={TermsOfUse}
        options={{
          tabBarIcon: ({focused, color, size, icon}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={checks}
                style={{
                  width: 50,
                  height: 50,
                  tintColor: focused ? colors.primary : 'gray',
                }}
                resizeMode={'contain'}
              />
              {/* <Text
                style={{
                  color: focused ? colors.primary : 'gray',
                  fontFamily: 'Raleway-Medium',

                  fontSize: 10,
                  marginTop: 10,
                }}>
                Terms of Use
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({focused, color, size, icon}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={notification}
                style={{
                  width: 60,
                  height: 60,
                  tintColor: focused ? colors.primary : 'gray',
                }}
                resizeMode={'contain'}
              />
              {/* <Text
                style={{
                  color: focused ? colors.primary : 'gray',
                  fontSize: 10,
                  marginTop: 10,
                  fontFamily: 'Raleway-Medium',
                }}>
                Notifications
              </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.orange,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
export default TabNavigation;
