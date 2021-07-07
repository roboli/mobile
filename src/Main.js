import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  h1: {
    color: '#0077cc',
    fontSize: 48,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 18
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Hello world!
      </Text>
      <Text styles={styles.paragraph}>
        This is my app
      </Text>
      <Image source={require('../assets/images/hello-world.jpg')} />
    </View>
  );
};

export default Main;
