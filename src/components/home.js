import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { viewStyle, textStyle, lessonIconStyle, profileIconStyle, rowStyle } = styles
    return (
      <View style={viewStyle}>
        <View style={rowStyle}>
          <TouchableHighlight onPress={()=>this.props.navigator.push({name: 'lessonTitleCardList'})}>
            <Icon name='book' size={100} style={lessonIconStyle}/>
          </TouchableHighlight>
         <Text style={textStyle}>
            Lessons
          </Text>
        </View>
        <View style={rowStyle}>
          <TouchableHighlight onPress={()=>this.props.navigator.push({name: 'profile'})}>
            <Icon name='user-circle' size={100} style={profileIconStyle}/>
          </TouchableHighlight>
          <Text style={textStyle}>
            Profile
          </Text>
        </View>
      </View>
    )
  }
}

const coral = '#FA848A'
const successBlue = '#00C2FC';
const darkerBlue = '#00A6D9';


const styles = {
  title: {
    color: coral,
    fontSize: 60,
    fontFamily: 'Futura'
  },
  viewStyle: {
    height: Dimensions.get("window").height,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'white',
    flexWrap: 'wrap'
  },
  textStyle: {
    color: 'grey',
    fontSize: 15,
    lineHeight: 20
  },
  lessonIconStyle : {
    color: successBlue
  },
  profileIconStyle: {
    color: '#2CCC5A'
  },
  rowStyle: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center'
  }

}

export default Home