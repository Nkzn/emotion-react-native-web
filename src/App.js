import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, React Native for Web!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
