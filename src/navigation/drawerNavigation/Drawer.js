import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import DrawerSideBarMenu from './DrawerSideBarMenu'
import colors from '../../config/colors'
import Dashboard from '../../screens/dashboard'
import TabNavigation from '../tabNavigation/TabNavigation'
const MainDrawer = createDrawerNavigator()
const Drawer = ({ navigation }) => {
  return (
    <MainDrawer.Navigator
      drawerStyle={{ width: '80%', }}
      drawerContentOptions={{
        inactiveTintColor: 'black',
        activeTintColor: '#fff',
        inactiveBackgroundColor: 'white',
        itemStyle: { width: '100%', }
        
      }}

      drawerContent={props => <DrawerSideBarMenu {...props} />}>
      <MainDrawer.Screen
    
        name="Home" component={TabNavigation}
        options={{
          drawerLabelStyle:{fontFamily:'Raleway-Medium',fontSize:12},
          headerShown: false,
          title: 'Dashboard',
          drawerActiveTintColor: colors.primary,
          headerTintColor: colors.primary,
        }}
      />

    </MainDrawer.Navigator>
  );
}

export default Drawer

const styles = StyleSheet.create({
  cartIcon: {}
})