import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Home({ navigation }) {
  // props.navigation
  return (
    <>
      <Button
        title='로또 번호 생성기'
        onPress={() => {
          navigation.navigate('LottoGenerator');
        }}
      />
      <Button
        title='디지털 시계'
        onPress={() => {
          navigation.navigate('ClockDigital');
        }}
      />
      <Button
        title='Pressable'
        onPress={() => {
          navigation.navigate('PressableExam');
        }}
      />
    </>
  );
}
export default Home;
