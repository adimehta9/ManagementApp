import React from 'react';
import { Button } from 'react-native'

export default class LinksScreen extends React.Component {
  render() {
    return (
      <Button 
        title = "Go to settings"
        onPress={() => { this.props.navigation.navigate('Settings') }} />
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

