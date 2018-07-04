import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
import MainScreen from './src/components/MainScreen';

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
