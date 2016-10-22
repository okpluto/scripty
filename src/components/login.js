import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';


const Login = ({navigator}) => {
  const { viewStyle, cardStyle, textStyle, pinkCardStyle, whiteCardStyle, darkTextStyle, lightTextStyle} = styles;

  const navigate = (routeName) => {
    navigator.push({name:routeName})
  }

  return (
    <View style={viewStyle}>
      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
        <Text style={lightTextStyle}>Log In</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...whiteCardStyle}} underlayColor={grey}>
        <Text style={darkTextStyle}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  )
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get("window").height / 2 - 60,
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
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
}


export default Login;





