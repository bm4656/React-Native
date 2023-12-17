import React, { useCallback } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const screenList = [
//   { key: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator' },
//   { key: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital' },
// ];
// key가 아닌 id 사용시 keyExtrator 속성 사용
const screenList = [
  { id: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator' },
  { id: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital' },
];
export default function HomeF({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <Button
        title={item.title}
        onPress={() => {
          navigation.navigate(item.link);
        }}
      />
    );
  }, []);

  return (
    <>
      <FlatList
        data={screenList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
