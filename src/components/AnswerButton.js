import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

const AnswerButton = () => {
    return (
    <View style={viewStyle}>
      <Text style={title}>Scripty</Text> 
      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
        <Text style={lightTextStyle}>Log In</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...whiteCardStyle}} underlayColor={grey}>
        <Text style={darkTextStyle}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  )
};