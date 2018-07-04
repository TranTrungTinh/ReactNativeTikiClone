//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import { Container, Content, Icon} from 'native-base';

//import component
import HeaderComponent from './Header/HeaderComponent';
import DeliveryComponent from './Header/DeliveryComponent';
import SwiperComponent from './Header/SwiperComponent';
import CategoryComponent from './Header/CategoryComponent';
import ConvinientComponent from './Header/ConvinientComponent';
// create a component
class MainScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent />
        <Content style={styles.content}>
          <DeliveryComponent />
          <SwiperComponent />
          <CategoryComponent />
          <ConvinientComponent />
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
  },
  content: {
    marginTop: 50
  },
  
  
});

//make this component available to the app
export default MainScreen;
