import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';


const Login = ({navigator}) => {
  const { viewStyle, textStyle, } = styles;

  const navigate = (routeName) => {
    navigator.push({name:routeName})
  }

  return (
    <View style={{alignItems:'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={viewStyle}>
        <Text style={textStyle}>Signup</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={viewStyle}>
        <Text style={textStyle}>Login</Text>
      </TouchableHighlight>
    </View>
  )
};


const styles = {
  viewStyle: {
    backgroundColor: 'white',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 120,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 20,
  },
}


export default Login;





