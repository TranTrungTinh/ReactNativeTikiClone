//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CartItemComponent from './CartItemComponent';

// create a component
const renderCartItem = (items) => {
  return items.map(item => <CartItemComponent key={item.id} {...item} />);
}

const RecomentComponent = (props) => {
  
  return (
    <LinearGradient style={styles.discoveryReferWrap} colors={props.colors}>
      <View style={styles.discoveryTitle}>
        <Text style={styles.discoveryTitleMain}>{props.title}</Text>
        <Text style={styles.discoveryTitleSub}>{props.subtitle}</Text>
      </View>
      <View style={styles.discoveryContent}>
        {renderCartItem(props.items)}
        <View style={styles.discoveryShowAll}>
          <Text style={styles.discoveryShowAllText}>Xem tất cả</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  discoveryReferWrap: {
    marginTop: 10,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 3,
    height: 850,
    padding: 10
  },
  discoveryTitle: {
    marginTop: 5,
    marginBottom: 20
  },
  discoveryTitleMain: {
    color:'#fff',
    fontSize: 18,
    paddingBottom: 10
  },
  discoveryTitleSub: {
    color:'#fff',
    fontSize: 14,
    fontWeight: '300'
  },
  discoveryContent: {
    borderRadius: 5,
    backgroundColor: '#f3f2f3',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  discoveryShowAll:{
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  discoveryShowAllText: {
    color: '#57c3f6',
    fontSize: 18
  }
});

//make this component available to the app
export default RecomentComponent;
