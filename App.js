import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

import MainScreen from './src/components/MainScreen';
import CustomDrawer from './src/components/CustomDrawerComponent';

const {width} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = DrawerNavigator({
  MainScreen: {
    screen: MainScreen
  }
}, {
  drawerWidth: width*0.85,
  drawerPosition: 'left',
  contentComponent: CustomDrawer,
  drawOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
