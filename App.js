/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import HomeView from './src/components/Home/HomeView';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <HomeView/>
    </SafeAreaView>
  );
};


export default App;
