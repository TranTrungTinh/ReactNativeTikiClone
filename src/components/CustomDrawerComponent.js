//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Content, Container, Header, Icon, Left, Body, Right, Thumbnail, List, ListItem, Badge} from 'native-base';

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
        <Right><Icon name="arrow-forward" style={styles.iconForward}/></Right>
      </Header>
      <Content>
        <List style={styles.listItemWrap} >
          <ListItem noBorder icon>
            <Left><Icon name="ios-home-outline"/></Left>
            <Body><Text style={styles.iconText}>Trang chủ</Text></Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left><Icon type="MaterialIcons" name="format-list-bulleted"/></Left>
            <Body><Text style={styles.iconText}>Danh sách ngành hàng</Text></Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left><Icon name="ios-paper-outline"/></Left>
            <Body><Text style={styles.iconText}>Quản lý đơn hàng</Text></Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left><Icon name="ios-heart-outline"/></Left>
            <Body><Text style={styles.iconText}>Sản phẩm yêu thích</Text></Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left><Icon name="ios-person-outline"/></Left>
            <Body><Text style={styles.iconText}>Quản lý tài khoản</Text></Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left><Icon type="EvilIcons" name="bell"/></Left>
            <Body><Text style={styles.iconText}>Thông báo của tôi</Text></Body>
            <Right><Badge warning><Text>11</Text></Badge></Right>
          </ListItem>
        </List>

        <List style={styles.listItemWrap}>
          <ListItem noBorder>
            <Text style={styles.salesText} >KHUYẾN MÃI HOT</Text>
          </ListItem>
          <ListItem noBorder>
            <Text>Tiki Deal</Text>
          </ListItem>
          <ListItem noBorder>
            <Text>Ưu đãi cho chủ thẻ ngân hàng</Text>
          </ListItem>
        </List>

        <List style={styles.listItemWrap}>
          <ListItem noBorder>
            <Text>HOT LINE: <Text style={styles.hotlineText}>1900 - 6035</Text> (1000đ/phút)</Text>
          </ListItem>
          <ListItem noBorder>
            <Text>Cài đặt</Text>
          </ListItem>
          <ListItem noBorder icon>
            <Body><Text>Hổ trợ khách hàng</Text></Body>
            <Right><Icon name="arrow-forward"/></Right>
          </ListItem>
        </List>
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
  },
  listItemWrap:{
    borderBottomColor: '#f0f0f0', 
    borderBottomWidth: 0.5
  },
  iconText: {
    textAlign: 'left',
    paddingLeft: 15,
    fontSize: 15,
    color: '#000',
    fontWeight: '500'
  },
  salesText: {
    color: '#979898',
    fontSize: 16,
    fontWeight: '500'
  },
  hotlineText: {
    color: '#5db95d',
    fontWeight: '800'

  },
});

//make this component available to the app
export default CustomDrawerComponent;
