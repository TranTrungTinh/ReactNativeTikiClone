//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { Container, Content, Icon, Card, CardItem, Button } from 'native-base';
import Swiper from 'react-native-swiper';

import HeaderComponent from './Header/HeaderComponent';
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
          <Swiper style={{height: 250}} autoplay={true} >
            <View style={{flex: 1}}>
              <Image style={styles.imgSwiper} source={require('../assets/swiper/1.jpg')}/>
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.imgSwiper} source={require('../assets/swiper/2.jpg')}/>
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.imgSwiper} source={require('../assets/swiper/3.jpg')}/>
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.imgSwiper} source={require('../assets/swiper/4.jpg')}/>
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.imgSwiper} source={require('../assets/swiper/5.jpg')}/>
            </View>
          </Swiper>
          <Card>
            <CardItem header style={styles.cartHeader}>
              <Text>Danh Sách Ngành Hàng </Text>
              <Button style={styles.buttonHeader}>
                <Text style={styles.buttonHeaderText}>Xem tất cả</Text>
              </Button>
            </CardItem>
            <View style={{ height: 200 }}>
              <ScrollView
                style={{ flex: 1 }} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.itemCat}>
                  <Image source={require('../assets/category/1.jpg')} style={styles.itemCatImg}/>
                  <Text>Dien thoai</Text>
                </View>
              </ScrollView>
            </View>
          </Card>
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
  imgSwiper: {
    flex: 1,
    height: null,
    width: null
  },
  cartHeader: {
    justifyContent: 'space-between'
  },
  buttonHeader: {
    backgroundColor: '#189eff'
  },
  buttonHeaderText: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 8
  },
  itemCat: {
    flex: 1
  },
  itemCatImg: {
    width: 50,
    height: 50,
    resizeMode: 'cover'
  }
});

//make this component available to the app
export default MainScreen;
