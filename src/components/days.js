import React, { Component } from 'react';
import { Text, View } from 'react-native';

const days = 'Su M T W Th F Sa'.split(' ')

class Days extends Component {
  constructor(props) {
    super(props)
  }

  getStreak() {
    let streak = this.props.streak
    let today = new Date().getDay()
    if (today - streak[streak.length - 1] === 1 ||
        today - streak[streak.length - 1] === 0 ||
        today - streak[streak.length - 1] === -6) {
      return streak.length
    } else {
      return '0'
    }
  }

  setDayHighlight(day) {
    if (this.getStreak() !== '0') {
      let highlights = this.props.streak;
      let dayNum = days.indexOf(day).toString();
      return highlights.indexOf(dayNum) !== -1;
    } else {
      return false
    }
  }

  render() {
    const { dayStyle, circleActiveStyle, circleInactiveStyle, textStyle, dayTextStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>
          Current Streak: {this.getStreak()} Days
        </Text>
        <View style={dayStyle}>
          {days.map(day => (
            <View style={(this.setDayHighlight(day) ? circleActiveStyle : circleInactiveStyle)}>
              <Text key={day} style={dayTextStyle}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const coral = '#FA848A'
const grey = '#FAFAFA'

const styles = {
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 28,
    alignSelf: 'center'
  },
  dayStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  circleActiveStyle: {
    backgroundColor: coral,
    borderRadius: 100/2,
    width: 40,
    height: 40,
    marginRight: 5,
    paddingTop: 5,
  },
  circleInactiveStyle: {
    backgroundColor: 'grey',
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 5,
    paddingTop: 5,
  },
  dayTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: grey,
    lineHeight: 28,
    alignSelf: 'center'
  }
}

export default Days;