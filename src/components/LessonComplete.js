import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { localIp } from '../../config/ip.js'

class LessonComplete extends Component {
  constructor(props) {
    super(props)
    //props: lessonId, lessonTitle, numberCorrect, numberIncorrect
    this.state = {
      rating: [0, 0, 0, 0, 0]
    }
  }

  navigate(routeName) {
    this.saveResults()
    this.props.navigator.push({name:routeName});
  }

  getTotal() {
    return this.props.numberCorrect + this.props.numberIncorrect
  }

  rate(index) {
    let currRate = this.state.rating;
    newRate = currRate.map((rate, i) => {
      if (i <= index) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({rating: newRate})
  }

  saveResults() {
    //TODO (Ivey): save results to DB
    //save {lessonId, title, score} to user
    //update streak on user
    //update lastlessondate on user

    //saves rating to lesson
    let rating = this.state.rating.reduce((a, b) => a + b);
    let url = `http://${localIp}:3011/api/lessons/${this.props.lessonId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userRating: rating})
    })
    .then(data => data.json())
    .then(data=> console.log(data))
  }

  render() {
    const { viewStyle, cardStyle, textStyle, bigTextStyle, greenText, redText, subHead, starRowStyle, starStyle, starFilledStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Rate this lesson </Text>
        <View style={starRowStyle}>
          {this.state.rating.map((rate, index) =>
            (rate ?
              <TouchableHighlight onPress={() => this.rate(index)}>
                <Icon name='star' size={40} style={starFilledStyle}/>
              </TouchableHighlight> :
              <TouchableHighlight onPress={() => this.rate(index)}>
                <Icon name='star-o' size={40} style={starStyle}/>
              </TouchableHighlight>)
          )}
        </View>
        <Text style={bigTextStyle}>
          Congratulations!
        </Text>
        <Text style={subHead}> You got {this.props.numberCorrect} out of {this.getTotal()} correct! </Text>

        <TouchableHighlight style={cardStyle} underlayColor={darkerBlue} onPress={() => this.navigate('home')}>
          <Text style={textStyle} > Home </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const successBlue = '#00C2FC';
const darkerBlue = '#00A6D9';
const green = '#60CF73';
const incorrectRed = '#FA6467';

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  },
  cardStyle: {
    backgroundColor: successBlue,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
  },
  starRowStyle: {
    flexDirection: 'row',
    paddingBottom: 60
  },
  starStyle: {
    marginLeft: 4,
    marginRight: 4,
    color: 'grey'
  },
  starFilledStyle: {
    marginLeft: 4,
    marginRight: 4,
    color: '#f2d204'
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bigTextStyle: {
    fontSize: 28,
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  subHead: {
    fontSize: 20,
    marginBottom: 10,
  },
  greenText: {
    color: green,
  },
  redText: {
    color: incorrectRed,
  }
}

export default LessonComplete;