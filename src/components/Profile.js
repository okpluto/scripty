import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      this.setState({user: user[0]})
    })
  }

  render() {
    const { viewStyle, textStyle, profileStyle, nameTextStyle } = styles;
    if (this.state.user) {
      console.log(this.state.user)
      return (
        <View style={profileStyle}>
          <Text style={nameTextStyle}>
          <Icon name="user-circle" size={50} />
           {' ' + this.state.user.name}
          </Text>
          <Text style={textStyle}>
            Current Streak: {this.state.user.streak} Days
          </Text>
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
  nameTextStyle: {
    color:'#1c1c1c',
    fontSize: 33,
    lineHeight: 60
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 30,
  },
  profileStyle: {
    marginTop: 70,
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flex: 1
  },
  imageViewStyle: {
    height: 100,
  }
}

export default Profile;