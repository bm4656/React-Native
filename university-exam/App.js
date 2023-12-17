import * as React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import ClockDigital from './screens/ClockDigital';
import LottoGenerator from './screens/LottoGenerator';
import PressableExam from './screens/PressableExam';
import Home from './screens/Home';
import HomeF from './screens/HomeF';
import KeyboardExam from './screens/KeyboardExam';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name='Home' component={HomeF} />
        <Stack.Screen name='LottoGenerator' component={LottoGenerator} />
        <Stack.Screen name='ClockDigital' component={ClockDigital} />
        <Stack.Screen name='PressableExam' component={PressableExam} />
        <Stack.Screen name='KeyboardExam' component={KeyboardExam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
