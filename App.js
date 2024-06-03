import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded, fontsError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.centeredView}>
        <Text>Font tidak di temukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.defaultText}>Hello World</Text>
      <Text style={styles.metroBold}>Metro Bold</Text>
      <Text style={styles.metroSemiBold}>Metro SemiBold</Text>
      <Text style={styles.metroMedium}>Metro Medium</Text>
      <Text style={styles.metroBlack}>Metro Black</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 20,
  },
  metroBold: {
    fontFamily: 'Metro-Bold',
    fontSize: 30,
  },
  metroSemiBold: {
    fontFamily: 'Metro-SemiBold',
    fontSize: 30,
  },
  metroMedium: {
    fontFamily: 'Metro-Medium',
    fontSize: 30,
  },
  metroBlack: {
    fontFamily: 'Metro-Black',
    fontSize: 30,
  },
});

export default App;