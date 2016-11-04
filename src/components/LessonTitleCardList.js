import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import LessonTitleCard from './lessonTitleCard';
import { localIp } from '../../config/ip.js';

class LessonTitleCardList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lessonDetails: [],
      authorized: false
    }

  }

  componentDidMount() {
    this.getLessonDetails(function () {
      console.log(this.state.authorized);
      if (!this.state.authorized) {
        this.props.navigator.push({name: 'signIn'});
      }
    }.bind(this))
  }
  // Get all of the lesson titles & ids
  getLessonDetails(callback) {
    const url = `http://${localIp}:3011/api/lessons`;
    AsyncStorage.getItem('jwt', (err, token) => {
      if (!token) {
        this.setState({
          authorized: false
        })
        callback();
      } else {
        fetch(url, {
        headers: {
          Accept: 'application/json',
          Authorization: token
        },
        body: null
        })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            'lessonDetails': json,
            authorized: true
          })
          callback()
        })
        .catch((error) => {
          this.setState({
            authorized: false
          })
          callback();
        })
      }
    })

  }

  render() {
    const { viewStyle, textStyle } = styles;

      return (

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
          {
            this.state.lessonDetails.map(lesson => {
            return <LessonTitleCard lessonTitle={lesson.title}
              lessonId={lesson._id}
              navigator={ this.props.navigator }
              key={lesson._id} />
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
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    alignItems: 'center'
  }
}

export default LessonTitleCardList;
