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
import HomeView from './src/components/Home/HomeView';
import FinishView from './src/components/Finish/FinishView';

const Stack = createStackNavigator(
  
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen 
        name="Home"
        component={HomeView} 
        />
        <Stack.Screen 
        name="Finish"
        component={FinishView} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// import {
//   SafeAreaView,
// } from 'react-native';


// const AppNavigator = createStackNavigator( {
//   Home: {
//     screen: HomeView
//   }
// })

// export default NavigationContainer(AppNavigator)

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//         <HomeView/>
//     </SafeAreaView>
//   );
// };


// export default App;
