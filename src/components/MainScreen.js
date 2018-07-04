//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import { Container, Content, Icon } from 'native-base';

//import component
import HeaderComponent from './Header/HeaderComponent';
import SwiperComponent from './Header/SwiperComponent';
import CategoryComponent from './Header/CategoryComponent';
// create a component
class MainScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent />
        <Content style={styles.content}>
          <View style={styles.deliveryContainer}>
            <Icon type="MaterialCommunityIcons" name="map-marker" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Giao hàng tới: Xã Bình Hưng, Huyện Bình Chánh, TPHCM</Text>
          </View>
          <SwiperComponent />
          <CategoryComponent />
          
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
  deliveryContainer: {
    height: 50,
    backgroundColor: '#3179c5',
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  colorWhite: {
    color: '#fff',
    paddingRight: 10
  },
  
});

//make this component available to the app
export default MainScreen;
