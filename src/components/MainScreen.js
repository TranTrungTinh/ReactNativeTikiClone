//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Content, Icon, Card} from 'native-base';

//import component
import HeaderComponent from './Header/HeaderComponent';
import DeliveryComponent from './Header/DeliveryComponent';
import SwiperComponent from './Header/SwiperComponent';
import CategoryComponent from './Header/CategoryComponent';
import ConvinientComponent from './Header/ConvinientComponent';
import RecomentComponent from './Content/Recomentcomponent';

const items1 = [
  {id: '1', img: require('../assets/books/1.jpg'), title: 'Đời ngắn đừng ngủ dài', price: '157,400 đ', sales: '25', rating: 4, comment: '434'},
  {id: '2', img: require('../assets/books/2.jpg'), title: 'Nhà giả kim', price: '98,500 đ', sales: '20', rating: 3, comment: '139'},
  {id: '3', img: require('../assets/books/3.jpg'), title: 'Steve Job sức mạnh của sự khác biệt', price: '298,500 đ', sales: '30', rating: 5, comment: '24'},
  {id: '4', img: require('../assets/books/4.jpg'), title: 'Tuổi trẻ đáng giá bao nhiêu', price: '105,600 đ', sales: '15', rating: 5, comment: '2234'},
];
const items2 = [
  {id: '1', img: require('../assets/books/5.jpg'), title: 'Luyện Siêu Trí Nhớ Từ Vựng Tiếng Anh Dành Cho Học Sinh THPT Quốc Gia', price: '102,810 đ', sales: '28', rating: 4, comment: '434'},
  {id: '2', img: require('../assets/books/6.jpg'), title: 'Tôi Tài Giỏi - Bạn Cũng Thế', price: '88,000 đ', sales: '14', rating: 3, comment: '54'},
  {id: '3', img: require('../assets/books/7.jpg'), title: 'Hành Trình Về Phương Đông (Tái Bản)', price: '167,200 đ', sales: '20', rating: 5, comment: '145'},
  {id: '4', img: require('../assets/books/8.jpg'), title: 'Không Gia Đình (Trí Việt)', price: '346,500 đ', sales: '36', rating: 5, comment: '87'},
];
const items3 = [
  {id: '1', img: require('../assets/books/9.jpg'), title: 'Vô Cùng Tàn Nhẫn Vô Cùng Yêu Thương (Tái Bản 2017)', price: '16,800 đ', sales: '10', rating: 4, comment: '234'},
  {id: '2', img: require('../assets/books/10.jpg'), title: 'Tư Duy Nhanh Và Chậm', price: '145,700 đ', sales: '17', rating: 3, comment: '234'},
  {id: '3', img: require('../assets/books/11.jpg'), title: 'Luyện Siêu Trí Nhớ Từ Vựng (Dùng Kèm App - Tặng Thẻ Học Online Trị Giá 150.000)', price: '430,000 đ', sales: '15', rating: 5, comment: '2434'},
  {id: '4', img: require('../assets/books/12.jpg'), title: 'Điều Trị Bệnh Tận Gốc Năng Lực Của Tâm Bi Mẫn', price: '243,500 đ', sales: '22', rating: 5, comment: '1234'},
];
// create a component
class MainScreen extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent {...this.props}/>
        <Content style={styles.content}>
          <DeliveryComponent />
          <SwiperComponent />
          <CategoryComponent />
          <ConvinientComponent />
          <RecomentComponent 
            items={items1} 
            title="Khám Phá Thêm" 
            subtitle="Sách tư duy - Kỹ năng sống" 
            colors={['#1e5fe2','#1e5fe2', '#57c3f6']}
          />
          <RecomentComponent 
            items={items2} 
            title="Bạn Có Thể Cân Nhắc Thêm Trong" 
            subtitle="Truyện ngắn - Tản văn" 
            colors={['#5cb85c','#5db85c', '#bee869']}
          />
          <RecomentComponent 
            items={items3} 
            title="Được Nhiều Người Xem Trong" 
            subtitle="Sách kỹ năng làm việc" 
            colors={['#ee8835','#ee8c39', '#eac566']}
          />
          <RecomentComponent 
            items={items3} 
            title="Tiki deal" 
            subtitle="Dành cho bạn" 
            colors={['#e5477d','#e64a7c', '#eb7b64']}
          />
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
  
  
});

//make this component available to the app
export default MainScreen;
