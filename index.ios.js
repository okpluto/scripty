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
  Dimensions
} from 'react-native';
import Header from './src/components/header';
import LessonTitleCard from './src/components/lessonTitleCard';


class scripty extends Component {

  render() {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={viewStyle}>
        <StatusBar barStyle="light-content" />
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}> 
          <LessonTitleCard lessonTitle='Hello World!' />
          <LessonTitleCard lessonTitle='Functions' />
          <LessonTitleCard lessonTitle='For loops' />
          <LessonTitleCard lessonTitle='Objects' />
          <LessonTitleCard lessonTitle='Arrays' />
        </ScrollView>
      </View>
    )
  }
}


const styles = {
  viewStyle: {
    backgroundColor: '#F0F5F9',
    alignItems: 'center',
    elevation: 0,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    paddingBottom: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  }
}






AppRegistry.registerComponent('scripty', () => scripty);
