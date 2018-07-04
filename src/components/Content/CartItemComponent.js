//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';

import StarRating from 'react-native-star-rating';

const {width} = Dimensions.get('window');
// create a component
const CartItemComponent = (props) => {
  return (
    <View style={styles.cartItemWrap}>
      <View style={styles.cartImage}>
        <Image style={styles.imageCover} source={props.img}/>
      </View>
      <View style={styles.cartInfo}>
        <Icon type="MaterialCommunityIcons" name="gift" style={styles.cartInfoIcon} />
        <Text style={styles.cartInfoTitle}>{props.title}</Text>
        <Text style={styles.cartInfoPrice}>{props.price}</Text>
        <View style={styles.cartInfoConten}>
          <Text style={styles.cartInfoSales}>18300đ</Text>
          <View style={{borderRadius: 5, backgroundColor: 'red',}} >
            <Text style={styles.cartInfoSalesBadge}>-{props.sales}%</Text>
          </View>
        </View>
        <View style={styles.cartInfoConten}>
          <StarRating 
            disabled={true}
            maxStars={5}
            rating={props.rating}
            starSize={12}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
          <Text style={styles.cartInfoComment}>{props.comment} nhận xét</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cartItemWrap: {
    paddingTop: 10,
    width: width / 2 - 14,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 2,
    marginLeft: 2
  },
  cartImage: {
    flex: 1,
    alignItems: 'center'
  },
  cartInfo: {
    flex: 1,
    alignItems: 'flex-start',
    height: 150,
    paddingHorizontal: 20
  },
  cartInfoIcon: {
    fontSize: 26,
    color: '#5cb85c'
  },
  cartInfoTitle: {
    fontSize: 16,
    fontWeight: '300'
  },
  cartInfoPrice: {
    fontSize: 19,
    color: 'red',
    fontWeight: '700'
  },
  cartInfoConten: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 5
  },
  cartInfoSales: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '300',
    textDecorationLine: 'line-through',
    paddingRight: 10
  },
  cartInfoSalesBadge: {
    padding: 5,
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  cartInfoComment: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '300',
    paddingLeft: 10
  },
  imageCover: {
    width: 120,
    height: 120
  }
});

//make this component available to the app
export default CartItemComponent;
