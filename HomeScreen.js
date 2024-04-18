// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'rgb(0, 0, 0)' }}>
//       <View
//         style={{
//           height: 103,
//           backgroundColor: 'rgba(95, 95, 95, 0.147)',
//         }}
//       >
//         {/* <Text style={{ color: 'rgb(101, 98, 96)', fontSize: 20 }}>Profile</Text> */}
//       </View>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ color: 'rgb(47, 31, 32)' }}> </Text>
//       </View>
//       <View
//         style={{
//           height: 83,
//           backgroundColor: 'rgba(40, 30, 40, 0.4)',
//         }}
//       >
//         <Text style={{ color: 'rgb(0, 0, 0)', fontSize: 20 }}>
//           {/* Wardrobe Social P2P Settings */}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// import React, { useRef } from 'react';
// import { View, Text, FlatList, Animated } from 'react-native';

// const App = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   // Calculate translateY for the header based on scroll position
//   const headerTranslateY = scrollY.interpolate({
//     inputRange: [15, 15], // Change 50 to the desired scroll distance
//     outputRange: [0, -123], // Change -50 to the desired header translation
//     extrapolate: 'clamp',
//   });

//   // Mock data for FlatList
//   const data = [{ key: '1' }];

//   return (
//     <View style={{ flex: 1, backgroundColor: 'rgb(0, 0, 0)' }}>
//       {/* Header */}
//       <Animated.View
//         style={{
//           height: 123,
//           backgroundColor: 'rgba(95, 95, 95, 0.147)',
//           transform: [{ translateY: headerTranslateY }], // Apply translateY animation
//           zIndex: 1, // Ensure header stays above content
//           position: 'absolute', // Position the header absolutely
//           width: '100%', // Take the full width
//           top: 0, // Align to the top
//         }}
//       >
//         {/* <Text style={{ color: 'rgb(101, 98, 96)', fontSize: 20 }}>Profile</Text> */}
//       </Animated.View>

//       {/* Main Content */}
//       <FlatList
//         data={data}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               height: 200,

//               marginVertical: 10,
//             }}
//           />
//         )}
//         keyExtractor={(item) => item.key}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           // Do not use useNativeDriver here
//           { useNativeDriver: false } // Remove this line
//         )}
//         scrollEventThrottle={4} // Adjust scroll event throttle as needed
//       />

//       {/* Footer */}
//       <View
//         style={{
//           height: 78,
//           backgroundColor: 'rgba(40, 30, 40, 0.3)',
//         }}
//       >
//         <Text style={{ color: 'black', fontSize: 20 }}>
//           {/* Wardrobe Social P2P Settings */}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// HomeScreen.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Footer from './footer';

const HomeScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Text style={styles.headerText}></Text>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        {/* Your scrollable content */}
      </ScrollView>

      <Footer navigation={navigation} />

      <TouchableOpacity
        style={[styles.circularButton, { top: '32%', left: '38%' }]}
      >
        <Text style={styles.buttonText}>Place ID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.circularButton, { left: '14%', top: '56%' }]}
      >
        <Text style={styles.buttonText}>Trade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.circularButton, { left: '63%', top: '56%' }]}
      >
        <Text style={styles.buttonText}>Reveal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  header: {
    height: 123,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(95, 95, 95, 0.147)',
  },
  headerText: {
    color: 'rgb(101, 98, 96)',
    fontSize: 20,
  },
  circularButton: {
    position: 'absolute',
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 1.2,
    borderColor: 'rgba(95, 95, 95, 0.147)',
    backgroundColor: 'rgba(95, 95, 95, 0.147)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
