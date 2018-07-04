//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Icon} from 'native-base';

// create a component
const ConvinientComponent = () => {
  return (
    <View style={styles.itemServiceWrap}>
      <View style={styles.itemService}>
        <Text style={styles.itemServiceText} >Dịch Vụ Tiện Ích</Text>
      </View>
      <View style={styles.itemServiceIcon}>
        <ScrollView
          style={{ flex: 1 }} 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemServiceIconScroll}
        >
          <View style={styles.itemServiceDetail}>
            <Icon name="ios-plane-outline" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Vé máy bay</Text>
          </View>
          <View style={styles.itemServiceDetail}>
            <Icon name="ios-medkit-outline" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Thẻ bảo hiểm online</Text>
          </View>
          <View style={styles.itemServiceDetail}>
            <Icon name="ios-card-outline" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Mua thẻ điện thoại</Text>
          </View>
          <View style={styles.itemServiceDetail}>
            <Icon type="MaterialCommunityIcons" name="signal-3g" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Thẻ 3G/4G</Text>
          </View>
          <View style={styles.itemServiceDetail}>
            <Icon name="ios-phone-portrait" style={styles.colorWhite}/>
            <Text style={styles.colorWhite}>Nạp tiền điện thoại</Text>
          </View>
        </ScrollView>
      </View>
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  itemServiceWrap: {
    backgroundColor: '#0d2f6a',
    marginTop: 2,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 3,
    height: 150
  },
  itemService: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemServiceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400'
  },
  itemServiceIcon: {
    flex: 3
  },
  itemServiceIconScroll: {
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10
  },
  itemServiceDetail: {
    flex: 1,
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  colorWhite: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5
  }
});

//make this component available to the app
export default ConvinientComponent;
