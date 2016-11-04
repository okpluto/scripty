import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Text, View, Image, Modal, Dimensions, TouchableHighlight, TextInput, Button } from 'react-native';
import { localIp } from '../../config/ip.js'


class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    }
  }

  handleSignInPress() {
    this.props.navigator.pop();
  }

  handleSignUpPress() {
    let url=`http://${localIp}:3011/api/users/signup`;
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    const json = JSON.stringify(data);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    })
    .then(response => response.json())
    .then((res) => {
      console.log('response:', res);
      if (res.error) {
        alert(res.error)
      } else {
        AsyncStorage.setItem('jwt', res.token)
        this.props.navigator.push({name: 'lessonTitleCardList'})
      }
    })
  }

  render() {
    const { viewStyle, cardStyle, textStyle, pinkCardStyle,
      whiteCardStyle, darkTextStyle, lightTextStyle, imageStyle, imageViewStyle,
      textInputStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={darkTextStyle}>Welcome to Scripty</Text>
        <View>
          <TextInput
            style={textInputStyle}
            placeholder={"email"}
            autoCapitalize={'none'}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={ (text) => this.setState({email: text})}
          />
          <TextInput
            style={textInputStyle}
            placeholder={"username"}
            autoCapitalize={'none'}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={ (text) => this.setState({username: text})}
          />
          <TextInput
            style={textInputStyle}
            secureTextEntry={true}
            placeholder={"password"}
            autoCapitalize={'none'}
            secureTextEntry={true}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={ (text) => this.setState({password: text})}
          />
          <TextInput
            style={textInputStyle}
            secureTextEntry={true}
            placeholder={"confirm password"}
            autoCapitalize={'none'}
            secureTextEntry={true}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={ (text) => this.setState({confirmPassword: text})}
          />
        </View>

        <TouchableHighlight onPress={this.handleSignUpPress.bind(this)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Sign Up</Text>
        </TouchableHighlight>
        <Text onPress={this.handleSignInPress.bind(this)} style={darkTextStyle}>Already have an account?</Text>
      </View>
    )
  }
}



const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
    position: 'relative',

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: coral,
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    height: undefined,
    resizeMode: 'contain',
  },
  imageViewStyle: {
    height: 100,
  },
  textInputStyle: {
    height: 60,
    width: Dimensions.get("window").width - 40,

    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 5,
    borderColor: coral,
    borderWidth: 1,

    color: coral,
    fontSize: 20,
    textAlign: 'center'

  }
}


export default SignInForm;
