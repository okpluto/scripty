import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

const NextButton = () => {

  const { viewStyle, cardStyle, textStyle } = styles;

  return (
    <View style={viewStyle} >
      <TouchableHighlight style={{...cardStyle}} underlayColor={darkerBlue} >
        <Text style={textStyle}>Next Question</Text>
      </TouchableHighlight>
    </View>
  )
};

const coral = '#FA848A';
const darkCoral = '#DE757A';
const grey = '#FAFAFA';
const darkGrey = '#7f8c8d';
const notBlack = '#1c1c1c';
const green = '#2CCC5A';
const mint = '#67D5B5';
const successBlue = '#00C2FC';
const darkerBlue = '#00A6D9';


const styles = {
  viewStyle: {
    // height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,

    position: 'absolute',
    bottom: 0,

    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingBottom: 40,

    backgroundColor: 'transparent'
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
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
}


export default NextButton;