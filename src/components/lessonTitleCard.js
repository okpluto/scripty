import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';




const LessonTitleCard = ({ lessonTitle }) => {
  const { viewStyle, textStyle, circleStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={circleStyle}></View>
      <Text style={textStyle}>{lessonTitle}</Text>
    </View>
  )
};


const styles = {
  viewStyle: {
    backgroundColor: 'white',

    alignItems: 'center',
    flexDirection: 'row',

    height: 120,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // elevation: 2,
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 20,
  },
  circleStyle: {
    borderRadius: 100,
    height: 90,
    width: 90,
    backgroundColor: '#4DD8F9',
    marginLeft: 20,
    marginRight: 20,
  }
}


export default LessonTitleCard;





