// Footer.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import WardrobeImage from './assets/wardrobe.png';
import P2PImage from './assets/p2p.png';
import SocialImage from './assets/social.png';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('WardrobeScreen')}
        style={styles.button}
      >
        <Image source={WardrobeImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('P2PScreen')}
        style={styles.button}
      >
        <Image source={P2PImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SocialScreen')}
        style={styles.button}
      >
        <Image source={SocialImage} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 83,
    backgroundColor: 'rgba(40, 30, 40, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  icon: {
    width: 23,
    height: 23,
    marginBottom: 12,
  },
});

export default Footer;
