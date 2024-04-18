// WardrobeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './footer';

const WardrobeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.screen]}>
      <Text style={styles.screenText}>
        Maro has zero clothings in his wardrobe!
      </Text>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
});

export default WardrobeScreen;
