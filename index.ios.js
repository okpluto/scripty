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
import Lesson from './src/components/Lesson';



class scripty extends Component {

  renderScene(route, navigator) {
    const { name } = route;
    if (name === 'Home') {
      return <LessonTitleCardList navigator={navigator} />
    } else if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Lesson') {
      return <Lesson questionText={mockLesson.questions[0].prompt} possibleAnswers={mockLesson.questions[0].answers} correctAnswer={mockLesson.questions[0].correctAnswer} navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Lesson' }}
      renderScene={this.renderScene}
      />
    )
  }
};



const mockLesson = {
  title: 'Hello World!',
  questions: [
    {
      prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc augue, mollis in nisi eget, pulvinar interdum velit. Nulla lectus nunc, eleifend sed sapien at, fermentum elementum eros. Mauris sed.',
      answers: ['console.log', 'print', 'display'],
      correctAnswer: 'console.log'
    }
  ]
}



AppRegistry.registerComponent('scripty', () => scripty);






