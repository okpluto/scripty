import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import QuestionPrompt from './QuestionPrompt';
import AnswerButton from './AnswerButton';
import NextButton from './NextButton';


class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  displayNextButton() {
    if (this.state.clicked) {
      return <NextButton />
    }
  }

  handleAnswerButtonClick() {
    this.setState({ clicked: true })
  }

  render() {
    const {viewStyle} = styles;
    return (
      <View style={viewStyle}>
        <QuestionPrompt text={this.props.questionText} />
        { this.props.possibleAnswers.map(answer => {
          let isCorrectAnswer;
          
          if (this.state.clicked) {
            isCorrectAnswer = answer === this.props.correctAnswer;
          }
    
          return <AnswerButton possibleAnswer={answer} key={answer} 
          handleAnswerButtonClick={this.handleAnswerButtonClick.bind(this)} 
          isCorrectAnswer={isCorrectAnswer} />
        })}
        { this.displayNextButton() }
      </View>
    )
  }
};

const coral = '#FA848A';

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