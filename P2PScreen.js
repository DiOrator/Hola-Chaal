// P2PScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './footer';

const P2PScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.screen]}>
      <Text style={styles.screenText}>P2P Screen</Text>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    color: 'white',
  },
});

export default P2PScreen;
