import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfilesListScreen from '../screens/ProfilesListScreen';
import CreateScheduleScreen from '../screens/CreateScheduleScreen';
import HomePageACScreen from '../screens/HomePageACScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);


HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const HomePageACStack = createStackNavigator(
  {
    HomePageAC: HomePageACScreen,
  },
  config
);


HomePageACStack.navigationOptions = {
  tabBarLabel: 'HomePageAC',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomePageACStack.path = '';

const ProfilesListStack = createStackNavigator(
  {
    ProfilesList: ProfilesListScreen,
  },
  config
);

ProfilesListStack.navigationOptions = {
  tabBarLabel: 'ProfilesList',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ProfilesListStack.path = '';



const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';


const CreateScheduleStack = createStackNavigator(
  {
    CreateSchedule: CreateScheduleScreen,
  },
  config
);

CreateScheduleStack.navigationOptions = {
  tabBarLabel: 'CreateSchedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

CreateScheduleStack.path = '';



const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createSwitchNavigator({
  HomeStack,
  ProfilesListStack,
  LinksStack,
  SettingsStack,
  CreateScheduleStack,
  HomePageACStack,
});

tabNavigator.path = '';

export default tabNavigator;
