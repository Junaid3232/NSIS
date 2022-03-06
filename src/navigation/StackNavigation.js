import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import CompleteRegistration from '../screens/completeRegistration';
import Register2 from '../screens/register2';
import Register3 from '../screens/register3';
import ForgotPassword from '../screens/forgotPassword';
import Drawer from './drawerNavigation/Drawer';
import Compliance from '../screens/compliance';
import NotificationDetail from '../screens/notificationDetail';
import NationalSafety from '../screens/nationalSafety';
import AboutNISCN from '../screens/aboutNISCN';
import ReportIssue from '../screens/reportIssue';
import IndustrySafety from '../screens/industrySafety';
import StateSafety from '../screens/stateSafety';
import SplashScreen from '../screens/splashScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register3"
        component={Register3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Drawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Compliance"
        component={Compliance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NationalSafety"
        component={NationalSafety}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={AboutNISCN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportIssue"
        component={ReportIssue}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndustrySafety"
        component={IndustrySafety}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StateSafety"
        component={StateSafety}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
