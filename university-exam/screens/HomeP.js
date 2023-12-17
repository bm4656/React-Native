//Home Pressable 버전
import React, { useCallback } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styled } from 'styled-components/native';

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
      <Pressable
        title={item.title}
        onPress={() => {
          navigation.navigate(item.link);
        }}>
        <LinkItem>
          <Text>{item.title}</Text>
        </LinkItem>
      </Pressable>
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
const LinkItem = styled.View`
  padding: 20px 12px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  background-color: #00ff00;
`;
