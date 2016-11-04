import React, { Component } from 'react';
import { Text, View } from 'react-native';

const days = 'Su M T W Th F Sa'.split(' ')

class Days extends Component {
  constructor(props) {
    super(props)
  }

  setDayHighlight(day) {
    let highlights = this.props.streak;
    let dayNum = days.indexOf(day);
    return highlights.indexOf(dayNum) !== -1;
  }

  render() {
    const { dayStyle, circleActiveStyle, circleInactiveStyle, textStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>
          Current Streak: {this.props.streak.length} Days
        </Text>
        <View style={dayStyle}>
          {days.map(day => (
          <Text key={day} style={(this.setDayHighlight(day) ? circleActiveStyle : circleInactiveStyle)}>{day}</Text>
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
    marginTop: 10,
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
  }
}

export default Days;