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
import Header from './components/header';
import LessonTitleCard from './components/lessonTitleCard';
import LessonTitleCardList from './components/LessonTitleCardList';
import Login from './components/login';
import Lesson from './components/Lesson';
import LessonComplete from './components/LessonComplete';



class Scripty extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Home') {
      return <LessonTitleCardList navigator={navigator} />
    } else if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Lesson') {
      return <Lesson navigator={navigator} {...passProps} />
    } else if (name === 'LessonComplete') {
      return <LessonComplete navigator={navigator} {...passProps} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Login' }}
      renderScene={this.renderScene}
      />
    )
  }
};

export default Scripty;










