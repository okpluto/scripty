/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  Navigator
} from 'react-native';
import Header from './src/components/header';
import LessonTitleCard from './src/components/lessonTitleCard';
import LessonTitleCardList from './src/components/LessonTitleCardList';
import Login from './src/components/login';



class scripty extends Component {

  renderScene(route, navigator) {
    const { name } = route;
    if (name === 'Home') {
      return <LessonTitleCardList navigator={navigator} />
    } else if (name === 'Login') {
      return <Login navigator={navigator}/>
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: '#F0F5F9', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Login' }}
      renderScene={this.renderScene}
      />
    )
  }
}



AppRegistry.registerComponent('scripty', () => scripty);






