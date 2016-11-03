import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.getUserInfo()
  }


  getUserInfo() {
    //Using get all users to test dummy user
    //Need to get user by ID once signin
    //and save users to DB is implemented
    let url=`http://10.226.56.128:3011/api/users`
    fetch(url)
    .then(user => {
      return user.json()
    })
    .then(user => {
      console.log(user)
      this.setState({user: user})
    })
  }

  render() {
    const { viewStyle, textStyle } = styles;
    if (this.state.user) {
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>Show Profile Here </Text>
        </View>
      )
    } else {
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>Loading...</Text>
        </View>
      )
    }
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  title: {
    color: coral,
    fontSize: 60,
    fontFamily: 'Futura'
  },
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
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 30,
  },
  imageViewStyle: {
    height: 100,
  }
}

export default Profile;