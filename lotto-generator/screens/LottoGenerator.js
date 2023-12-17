import { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

let numbers = [];
let colors = ['red', 'blue', 'yellow', '#e5e5e5'];
//1부터 45숫자 생성
_.times(45, (n) => numbers.push(n + 1));
numbers = _.shuffle(numbers);
export default function LottoGenerator() {
  const [displayNumbers, setDisplayNumbers] = useState(_.shuffle(numbers));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {displayNumbers.slice(0, 6).map((number, index) => (
          <View
            key={number}
            style={[
              styles.ball,
              {
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              },
            ]}>
            <Text style={styles.text}>{number}</Text>
          </View>
        ))}
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
    // backgroundColor: '#e5e5e5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
