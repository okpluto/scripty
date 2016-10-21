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



class scripty extends Component {
  renderScene(route, navigator) {
    console.log('ROUTE - ',route,'NAVIGATOR-', navigator)

    return <LessonTitleCardList style={{zIndex:1, flex:1}} navigator={navigator} />
  }

  render() {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={viewStyle}>
        <StatusBar barStyle="light-content" />
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} > 
          <LessonTitleCard lessonTitle='Hello World!' />
          <LessonTitleCard lessonTitle='Functions' />
          <LessonTitleCard lessonTitle='For loops' />
          <LessonTitleCard lessonTitle='Objects' />
          <LessonTitleCard lessonTitle='Arrays' />
        </ScrollView>
        <Navigator style={{zIndex:1, flex:1}} initialRoute={{ name:'Home' }} renderScene={this.renderScene.bind(this)} />
      </View>
    )
  }

}


const styles = {
  viewStyle: {
    // backgroundColor: '#F0F5F9',
    // backgroundColor: 'transparent',
    alignItems: 'center',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    zIndex: -1,
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  }
}






AppRegistry.registerComponent('scripty', () => scripty);
