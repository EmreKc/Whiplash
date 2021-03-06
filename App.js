import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Open up App.js<Text> hello test</Text> to start working on your app!</Text>
        <Text>Open up App.js to start working on your</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'pink',
    padding: 20
  },

  boldText: {
    fontWeight: 'bold'
  },

  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
