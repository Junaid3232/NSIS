import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import TabNavigation from './tabNavigation/TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation=()=> {
  return (
   <>
      <Drawer.Navigator initialRouteName="TabNavigation" >
        <Drawer.Screen name="TabNavigation" component={TabNavigation}/>
       
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigation;