import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const difficulty = ['','Basics', 'Easy', 'Med', 'Hard', 'Insane']
const blues = ['', '#00C2FC', '#009FCC', '#007799', '#004F66', '#002732']

const LessonTitleCard = ({ lessonTitle, navigator, lessonId, lessonDifficulty, lessonRating }) => {
  const { buttonStyle, viewStyle, textStyle, circleStyle, rightTextStyle, titleStyle, starStyle } = styles;

  const getCircleColor = (style) => {
    styleCopy = {...style};
    styleCopy.backgroundColor = blues[lessonDifficulty];
    return styleCopy
  };

  const renderStars = () => {
    if (!lessonRating) {
      return <Text>No ratings yet</Text>
    }
    let numStars = Math.floor(lessonRating);
    let remainder = lessonRating % 1;
    let halfStar = false;
    if (remainder > .75) {
      numStars++;
    } else if (remainder > .25) {
      halfStar = true;
    }
    let star = <Icon name='star' size={15} style={starStyle}/>
    let starArray = []
    for (var i = 0; i < numStars; i++) {
      starArray.push(star)
    }
    if (halfStar) {
      starArray.push(<Icon name='star-half' size={15} style={starStyle}/>)
    }
    return starArray
  }

  const navigate = (routeName, id, lessonTitle) => {
    navigator.push({
      name:routeName,
      passProps: {
        id: id,
        title: lessonTitle
      }
    })
  };

  return (
    <TouchableHighlight onPress={navigate.bind(this, 'lesson', lessonId, lessonTitle)} underlayColor={grey} style={buttonStyle}>
      <View style={viewStyle}>
        <View style={titleStyle}>
          <View style={getCircleColor(circleStyle)}></View>
            <View>
            <Text style={textStyle}>{lessonTitle}</Text>
              <View style={titleStyle}>{renderStars()}</View>
            </View>
        </View>
        <Text style={rightTextStyle}>{difficulty[lessonDifficulty]}</Text>
      </View>
    </TouchableHighlight>
  )
};


const grey = '#FAFAFA'

const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    width: Dimensions.get("window").width - 20,
    marginTop: 0,
    borderColor: '#ecf0f1',
    borderBottomWidth: 0.5,
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    flex: 1,
    height: 38,
    flexDirection: 'row',
  },
  starStyle: {
    color: '#f2d204'
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 17,
  },
  rightTextStyle: {
    color: '#1c1c1c',
    fontSize: 17,
    marginRight: 10
  },
  circleStyle: {
    borderRadius: 100,
    height: 30,
    width: 30,
    marginLeft: 20,
    marginRight: 20,
  }
}


export default LessonTitleCard;





