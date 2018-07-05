//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Body, Icon, Title, Item, Input, Badge } from 'native-base';

// create a component
const HeaderComponent = (props) => {
  return (
    <View>
      <Header style={styles.header} >
        <Left style={styles.leftIcon} >
            <Icon name="md-menu" style={styles.menuIcon} onPress={() => props.navigation.navigate('DrawerOpen')}/>
        </Left>
        <Body>
          <Title style={styles.headerTitle} >TIKI.VN</Title>
        </Body>
        <Right style={styles.rightIcon}>
          <TouchableOpacity style={{paddingRight: 5}}>
            <Icon type="EvilIcons" name="bell" style={styles.menuIcon}/>
            <Badge style={styles.badgeTag}><Text style={styles.badgeTagText} >11</Text></Badge>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft: 5}}>
            <Icon type="EvilIcons" name="cart" style={styles.menuIcon}/>
            <Badge style={styles.badgeTag}><Text style={styles.badgeTagText}>0</Text></Badge>
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.searchContainer}>
        <Item style={styles.searchBox}>
          <Icon name="ios-search-outline" style={styles.searchBoxIcon}/>
          <Input placeholder="Sản phẩm, thương hiệu và mọi thứ bạn cần..." />
          <Icon name="ios-barcode-outline" style={styles.searchBoxIcon}/>
        </Item>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
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
    paddingRight: 10,
    position: 'relative'
  },
  badgeTag: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: 22,
    height: 22,
    zIndex: 10,
    top: -8,
    right: -8
  },
  badgeTagText: {
    fontSize: 12,
    color: '#fff',
    paddingHorizontal: -1
  },
  menuIcon: {
    color: '#fff',
    fontSize: 34
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
export default HeaderComponent;
