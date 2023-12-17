import React from 'react';
import { StyleSheet, Pressable, Alert, Text, View } from 'react-native';

export default function PressableExam() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.button,
        ]}
        onPress={() => Alert.alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
