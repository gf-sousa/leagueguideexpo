import React from 'react'
import { Text } from 'react-native';
import { Linking } from 'expo';

export default class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress} style={{fontSize: 14, color: '#f0f0f0', alignSelf: "center"}}>
        {this.props.children}
      </Text>
    );
  }
}
