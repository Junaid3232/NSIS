import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/login'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigation';

const App=()=> {
  return (
    <View style={{flex:1}}>
       <NavigationContainer>
       <StackNavigator/>
       </NavigationContainer>

    </View>
  )
}

export default App;