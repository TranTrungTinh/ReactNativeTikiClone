//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Content, Container, Header, Icon, Left, Right, Thumbnail} from 'native-base';

// create a component
const CustomDrawerComponent = () => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header} >
        <Left style={styles.headerLeft}>
          <Thumbnail source={require('../assets/me.jpg')} />
          <View style={styles.personal}>
            <Text style={styles.personalName}>Xin chào Trần Trung Tính</Text>
            <Text style={styles.personalEmail}>trantrungtinh4954@gmail.com</Text>
          </View>
        </Left>
        <Right>
          <Icon name="arrow-forward" style={styles.iconForward}/>
        </Right>
      </Header>
      <Content>

      </Content>
    </Container> 
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#189eff',
    height: 90
  },
  headerLeft: {
    flexDirection: 'row',
  },
  personal: {
    paddingTop: 10,
    paddingLeft: 10
  },
  personalName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    paddingBottom: 10
  },
  personalEmail: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 10
  },
  iconForward: {
    color: '#fff',
    fontSize: 20
  }
});

//make this component available to the app
export default CustomDrawerComponent;
