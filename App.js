/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './src/components/Home/HomeView';
import FinishView from './src/components/Finish/FinishView';
import HistoryView from './src/components/History/HistoryView'

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="History" component={HistoryView} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Finish" component={FinishView} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}

export default App;

// const Tab = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeView
//     },    
//     Finish: {
//       screen: FinishView
//     },   
//     History: {
//       screen: HistoryView
//     }
//   },
//   {}
// );
