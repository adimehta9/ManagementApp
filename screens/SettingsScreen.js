import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ExpoConfigView />
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
