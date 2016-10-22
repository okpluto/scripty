import React, { Component } from 'react';
import { Text, View, Dimensions, StatusBar } from 'react-native';



const Header = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <StatusBar barStyle="light-content" />
      <Text style={textStyle}>Scripty</Text>
    </View>
  )
};



const styles = {
  viewStyle: {
    backgroundColor: '#FA848A',

    justifyContent: 'center',
    alignItems: 'center',

    height: 60,
    width: Dimensions.get("window").width,
    paddingTop: 15,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position:'absolute',
    top:0,
    left:0
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Futura',
  }
}




export default Header;










