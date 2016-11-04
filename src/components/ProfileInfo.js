import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const textStyle = {
  color:'#1c1c1c',
  fontSize: 33,
  lineHeight: 60
};

const ProfileInfo = (props) => (
  <Text style={textStyle}>
    <Icon name='user-circle' size={50} />
     {' ' + props.user.name}
  </Text>
)

module.exports = ProfileInfo