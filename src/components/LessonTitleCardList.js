import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';

const LessonTitleCardList = ({ navigator }) => {
  const {viewStyle} = styles;
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
      <LessonTitleCard lessonTitle='Hello World!' navigator={navigator} />
      <LessonTitleCard lessonTitle='Functions' navigator={navigator} />
      <LessonTitleCard lessonTitle='For loops' navigator={navigator} />
      <LessonTitleCard lessonTitle='Objects' navigator={navigator} />
      <LessonTitleCard lessonTitle='Arrays' navigator={navigator} />
    </ScrollView>
  )
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  }
}

export default LessonTitleCardList;
