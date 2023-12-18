import { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { shuffle } from 'lodash';

export default function LottoGenerator() {
  const [displayNumbers, setDisplayNumbers] = useState(generateNumbers());

  function generateNumbers() {
    const numbers = Array.from({ length: 45 }, (_, index) => index + 1);
    const shuffledNumbers = shuffle(numbers);
    return shuffledNumbers.slice(0, 6);
  }

  // 바닐라JS 버전
  // function shuffle(array) {
  //   const shuffledArray = [...array];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [
  //       shuffledArray[j],
  //       shuffledArray[i],
  //     ];
  //   }
  //   return shuffledArray;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {displayNumbers.map((number, index) => (
          <View
            key={number}
            style={[
              styles.ball,
              {
                backgroundColor: getRandomColor(),
              },
            ]}>
            <Text style={styles.text}>{number}</Text>
          </View>
        ))}
      </View>
      <Button
        title='다시하기'
        onPress={() => setDisplayNumbers(generateNumbers())}
      />
    </SafeAreaView>
  );
}

function getRandomColor() {
  const colors = ['red', 'blue', 'yellow', '#e5e5e5'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
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
