import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import QuestionPrompt from './QuestionPrompt';
import AnswerButton from './AnswerButton';



const Lesson = ({ navigator, questionText, possibleAnswers }) => {
  const {viewStyle} = styles;

  const navigate = (routeName) => {
    navigator.push(routeName)
  };

  return (
    <View style={viewStyle}>
      <QuestionPrompt text={questionText} />
      <AnswerButton possibleAnswer={'console.log'}>
      <AnswerButton possibleAnswer={'print'}>
    </View>
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

export default Lesson;