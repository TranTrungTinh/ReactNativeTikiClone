//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
// create a component
const MyComponent = () => {
  return (
    <View style={styles.deliveryContainer}>
      <Icon type="MaterialCommunityIcons" name="map-marker" style={styles.colorWhite}/>
      <Text style={styles.colorWhite}>Giao hàng tới: Xã Bình Hưng, Huyện Bình Chánh, TPHCM</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
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
  }
});

//make this component available to the app
export default MyComponent;
