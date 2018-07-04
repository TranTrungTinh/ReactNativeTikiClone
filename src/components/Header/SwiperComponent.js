//import liraries
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

// create a component
const SwiperComponent = () => {
  return (
    <Swiper style={{height: 250}} autoplay={true} >
      <View style={{flex: 1}}>
        <Image style={styles.imgSwiper} source={require('../../assets/swiper/1.jpg')}/>
      </View>
      <View style={{flex: 1}}>
        <Image style={styles.imgSwiper} source={require('../../assets/swiper/2.jpg')}/>
      </View>
      <View style={{flex: 1}}>
        <Image style={styles.imgSwiper} source={require('../../assets/swiper/3.jpg')}/>
      </View>
      <View style={{flex: 1}}>
        <Image style={styles.imgSwiper} source={require('../../assets/swiper/4.jpg')}/>
      </View>
      <View style={{flex: 1}}>
        <Image style={styles.imgSwiper} source={require('../../assets/swiper/5.jpg')}/>
      </View>
    </Swiper>
  );
};

// define your styles
const styles = StyleSheet.create({
  imgSwiper: {
    flex: 1,
    height: null,
    width: null
  }
});

//make this component available to the app
export default SwiperComponent;
