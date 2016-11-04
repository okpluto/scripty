import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { localIp } from '../../config/ip.js'

const days = 'Su M T W Th F Sa'.split(' ')

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.getUserInfo()
  }

  getUserInfo() {
    //Using get all users to test dummy user
    //Need to get user by ID once signin
    //and save users to DB is implemented
    let url=`http://${localIp}:3011/api/users`
    fetch(url)
    .then(user => {
      return user.json()
    })
    .then(user => {
      this.setState({user: user[0]});
      this.setDayHighlight();
    })
  }

  setDayHighlight(day) {
    let highlights = this.state.user.streak;
    let dayNum = days.indexOf(day);
    return highlights.indexOf(dayNum) !== -1;
  }

  getScoreStyle(score, style) {
    styleCopy = {}
    for (var key in style) {
      styleCopy[key] = style[key]
    }
    let scoreArray = score.split('/')
    let percent = Number(scoreArray[0]) / Number(scoreArray[1])
    let color = '#2aa009'
    if (percent < 0.65) {
      color = '#a80f0f'
    } else if (percent < 0.85) {
      color = '#f2d204'
    }
    styleCopy.borderColor = color;
    return styleCopy
  }

  render() {
    const { viewStyle, textStyle, profileStyle, nameTextStyle, dayStyle, circleActiveStyle, circleInactiveStyle, lessonStyle, scrollStyle, scoreCircle, lessonContainerStyle } = styles;
    if (this.state.user) {
      console.log(this.state.user)
      return (
        <View style={profileStyle}>
          <Text style={nameTextStyle}>
          <Icon name='user-circle' size={50} />
           {' ' + this.state.user.name}
          </Text>
          <Text style={textStyle}>
            Current Streak: {this.state.user.streak.length} Days
          </Text>
          <View style={dayStyle}>
          {days.map(day => (
          <Text key={day} style={(this.setDayHighlight(day) ? circleActiveStyle : circleInactiveStyle)}>{day}</Text>
          ))}
          </View>
          <ScrollView contentContainerStyle={scrollStyle}>
            {this.state.user.lessons.map(lesson => (
              <View style={lessonContainerStyle}>
                <Text key={lesson.lessonId} style={lessonStyle}>
                  {lesson.title}
                </Text>
                <Text style={this.getScoreStyle(lesson.score, scoreCircle)}>{lesson.score}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>Loading...</Text>
        </View>
      )
    }
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  title: {
    color: coral,
    fontSize: 60,
    fontFamily: 'Futura'
  },
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
    position: 'relative',

  },
  scrollStyle: {
    backgroundColor: grey,
    width: Dimensions.get("window").width - 40,
    height: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gainsboro',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5
  },
  dayStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  lessonStyle: {
    fontSize: 33
  },
  circleActiveStyle: {
    backgroundColor: coral,
    borderRadius: 100/2,
    width: 40,
    height: 40,
    marginRight: 5,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: grey
  },
  circleInactiveStyle: {
    backgroundColor: 'grey',
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 5,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  lessonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  scoreCircle: {
    borderRadius: 100/2,
    width: 60,
    height: 60,
    marginRight: 5,
    textAlign: 'center',
    paddingTop: 9,
    fontSize: 25,
    fontWeight: 'bold',
    color: grey,
    borderWidth: 4,
    backgroundColor: 'grey'
  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: coral,
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    height: undefined,
    resizeMode: 'contain',
  },
  nameTextStyle: {
    color:'#1c1c1c',
    fontSize: 33,
    lineHeight: 60
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 30,
  },
  profileStyle: {
    marginTop: 70,
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flex: 1
  },
  imageViewStyle: {
    height: 100,
  }
}

export default Profile;