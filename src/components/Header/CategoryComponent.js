//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, CardItem, Button } from 'native-base';

// create a component
const CategoryComponent = () => {
  return (
    <Card>
      <CardItem header style={styles.cartHeader}>
        <Text>Danh Sách Ngành Hàng </Text>
        <Button style={styles.buttonHeader}>
          <Text style={styles.buttonHeaderText}>Xem tất cả</Text>
        </Button>
      </CardItem>
      <View style={{ height: 220, paddingHorizontal: 20 }}>
        <ScrollView
          style={{ flex: 1 }} 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        <View style={styles.itamWrap}>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/1.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Thiết bị số</Text>
          </View>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/2.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Smartphone</Text>
          </View>
        </View>
        <View style={styles.itamWrap}>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/3.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Laptop</Text>
          </View>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/4.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Máy ảnh</Text>
          </View>
        </View>
        <View style={styles.itamWrap}>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/5.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Hàng tiêu dùng</Text>
          </View>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/6.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Nhà sách tiki</Text>
          </View>
        </View>
        <View style={styles.itamWrap}>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/7.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Balo - Túi xách</Text>
          </View>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/8.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Thời trang</Text>
          </View>
        </View>
        <View style={styles.itamWrap}>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/9.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Giày - dép</Text>
          </View>
          <View style={styles.itemCat}>
            <Image source={require('../../assets/category/10.jpg')} style={styles.itemCatImg}/>
            <Text style={styles.itemCatText}>Ôtô - Xe máy</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
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
  itamWrap: {
    width: 140,
    alignItems: 'flex-start'
  },
  itemCat: {
    flex: 1,
    height: 100,
    paddingBottom: 10,
    alignItems: 'center'
  },
  itemCatImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginBottom: 10
  },
  itemCatText: {
    color: 'grey',
    fontWeight: '300'
  }
});

//make this component available to the app
export default CategoryComponent;
