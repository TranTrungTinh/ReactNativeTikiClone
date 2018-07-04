//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import { Container, Content, Icon, Card} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

//import component
import HeaderComponent from './Header/HeaderComponent';
import DeliveryComponent from './Header/DeliveryComponent';
import SwiperComponent from './Header/SwiperComponent';
import CategoryComponent from './Header/CategoryComponent';
import ConvinientComponent from './Header/ConvinientComponent';
import DiscoverCartItem from './Content/CartItemComponent';

const items = [
  {id: '1', img: require('../assets/books/1.jpg'), title: 'Đời ngắn đừng ngủ dài', price: '43,400 đ', sales: '22', rating: 4, comment: '234'},
  {id: '2', img: require('../assets/books/2.jpg'), title: 'Nhà giả kim', price: '43,400 đ', sales: '22', rating: 3, comment: '234'},
  {id: '3', img: require('../assets/books/3.jpg'), title: 'Steve Job sức mạnh của sự khác biệt', price: '43,400 đ', sales: '22', rating: 5, comment: '234'},
  {id: '4', img: require('../assets/books/4.jpg'), title: 'Tuổi trẻ đáng giá bao nhiêu', price: '43,400 đ', sales: '22', rating: 5, comment: '234'},
];
// create a component
class MainScreen extends Component {

  renderCartItem = () => {
    return items.map(item => (
      <DiscoverCartItem 
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        sales={item.sales}
        rating={item.rating}
        comment={item.comment}
      />
    ));
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent />
        <Content style={styles.content}>
          <DeliveryComponent />
          <SwiperComponent />
          <CategoryComponent />
          <ConvinientComponent />
          <LinearGradient style={styles.discoveryReferWrap} colors={['#1e5fe2','#1e5fe2', '#57c3f6']}>
            <View style={styles.discoveryTitle}>
              <Text style={styles.discoveryTitleMain}>Khám phá thêm</Text>
              <Text style={styles.discoveryTitleSub}>Sách tư duy, kỹ năng sống</Text>
            </View>
            <View style={styles.discoveryContent}>
              {this.renderCartItem()}
              <View style={styles.discoveryShowAll}>
                <Text style={styles.discoveryShowAllText}>Xem tất cả</Text>
              </View>
            </View>
          </LinearGradient>
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
    borderRadius: 5
  },
  content: {
    marginTop: 50
  },
  discoveryReferWrap: {
    marginTop: 5,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 3,
    height: 900,
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
export default MainScreen;
