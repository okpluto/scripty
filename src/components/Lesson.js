import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import QuestionPrompt from './QuestionPrompt';
import AnswerButton from './AnswerButton';
import NextButton from './NextButton';


class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      currentQuestion: 0
    }
  }

  navigate (routeName) {
    this.props.navigator.push({name:routeName});
  }

  displayNextButton() {
    if (this.state.clicked) {
      return <NextButton handleNextButtonClick={this.handleNextButtonClick.bind(this)}/>
    }
  }

  handleAnswerButtonClick() {
    this.setState({ clicked: true })
  }

  handleNextButtonClick() {
    let questions = this.props.questions;

    if (this.state.currentQuestion >= questions.length-1) {
      this.navigate("LessonComplete");
    } else {
      this.setState({currentQuestion: this.state.currentQuestion+1,
        clicked: false})
    }
  }

  render() {
    const {viewStyle} = styles;

    let question = this.props.questions[this.state.currentQuestion]

    console.log('question', question)
    return (
      <View style={viewStyle}>
        <QuestionPrompt text={question.prompt} />
        { question.answers.map(answer => {
          let isCorrectAnswer;

          if (this.state.clicked) {
            isCorrectAnswer = answer === question.correctAnswer;
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