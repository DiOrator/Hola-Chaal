// SocialScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './footer';

const SocialScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.screen]}>
      <Text style={styles.screenText}>
        Oops!! Subscribe $6.99 monthly for this feature
      </Text>
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

export default SocialScreen;
