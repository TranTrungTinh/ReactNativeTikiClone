//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon, Title, Item, Input } from 'native-base';

// create a component
class MainScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} >
          <Left style={styles.leftIcon} >
            <Icon name="ios-menu-outline" style={styles.menuIcon}/>
          </Left>
          <Body>
            <Title style={styles.headerTitle} >TIKI.VN</Title>
          </Body>
          <Right style={styles.rightIcon}>
            <Icon type="EvilIcons" name="bell" style={styles.menuIcon}/>
            <Icon type="EvilIcons" name="cart" style={styles.menuIcon}/>
          </Right>
        </Header>
        <View style={styles.searchContainer}>
          <Item style={styles.searchBox}>
            <Icon name="ios-search-outline" style={styles.searchBoxIcon}/>
            <Input placeholder="Sản phẩm, thương hiệu và mọi thứ bạn cần..." />
            <Icon name="ios-barcode-outline" style={styles.searchBoxIcon}/>
          </Item>
        </View>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#189eff',
    height: 80
  },
  headerTitle: {
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: '700',
    color: '#fff'
  },
  leftIcon: {
    paddingLeft: 10
  },
  rightIcon: {
    paddingRight: 10
  },
  menuIcon: {
    color: '#fff'
  },
  searchContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 70,
    backgroundColor: '#189eff',
    height: 60
  },
  searchBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  searchBoxIcon: {
    paddingTop: 5,
    fontSize: 20
  }
});

//make this component available to the app
export default MainScreen;
