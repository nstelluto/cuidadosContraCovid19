import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Header style="auto" />
      <Menu style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    height: "100%"
  },

})