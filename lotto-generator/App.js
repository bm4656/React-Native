import { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

let numbers = [];

//1부터 45숫자 생성
_.times(45, (n) => numbers.push(n + 1));
numbers = _.shuffle(numbers);

export default function App() {
  const [displayNumbers, setDisplayNumbers] = useState(_.shuffle(numbers));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[0]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[1]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[2]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[3]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[4]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{displayNumbers[5]}</Text>
        </View>
      </View>
      <Button
        title='다시하기'
        onPress={() => setDisplayNumbers(_.shuffle(numbers))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  ball: {
    width: 50,
    height: 50,
    backgroundColor: '#e5e5e5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  text: {
    fontSize: 20,
    color: '#0000FF',
    fontWeight: 'bold',
  },
});
