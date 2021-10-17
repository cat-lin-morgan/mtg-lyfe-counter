import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GlobalContextProvider} from './contexts/GlobalContext'

export default function App() {
  return (
    <GlobalContextProvider>    
      <View style={styles.container}>
        <Text>Alex is a tremedous butt whom I, Cat Lin thee First, love very much!!!</Text>
        <StatusBar style="auto" />
      </View>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
