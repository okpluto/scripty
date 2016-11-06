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
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Lesson from './components/Lesson';
import LessonComplete from './components/LessonComplete';
import Profile from './components/Profile';
import Home from './components/home'

const Routes = {
  signIn: SignInForm,
  signUp: SignUpForm,
  lesson: Lesson,
  lessonComplete: LessonComplete,
  lessonTitleCardList: LessonTitleCardList,
  lessonTitleCard: LessonTitleCard,
  profile: Profile,
  home: Home
};

class Scripty extends Component {

  renderScene(route, navigator) {
    var Page = Routes[route.name];
    return <Page navigator = {navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}
      navigationBar={<Header />}
      initialRoute={{ name:'signIn' }}
      renderScene={this.renderScene}
      />
    )
  }
};

export default Scripty;










