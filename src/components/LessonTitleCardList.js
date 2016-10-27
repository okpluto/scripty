import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';

class LessonTitleCardList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lessonsInfo: []
    }
    // Get all of the lessons
    this.getLessonsInfo()
  }

  getLessonsInfo() {
    const url = 'http://localhost:3011/api/lessons'
    fetch(url)
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log('DATA => ', data)
      this.setState({'lessonsInfo': data})
    })
  }

  render() {
    const { viewStyle } = styles;
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
        { 
          this.state.lessonsInfo.map(lesson => {
          return <LessonTitleCard lessonTitle={lesson.title} navigator={ this.props.navigator } key={lesson.title} />
          })
        }
      </ScrollView>
    )
  }
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
