//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import HeaderComponent from './Header/HeaderComponent';
// create a component
class MainScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent />
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

//make this component available to the app
export default MainScreen;
