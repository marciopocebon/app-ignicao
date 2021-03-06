import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProfileUpdate from './pages/ProfileUpdate';
import Launchs from './pages/Launchs';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    SignedRoutes: createBottomTabNavigator({
      Map: {
        screen: createStackNavigator({
          Dashboard,
          Profile,
        }, {
          defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitle: null,
            headerStyle: { backgroundColor: '#111' }
          },
        }),
        navigationOptions: {
          tabBarLabel: 'Insiders',
          tabBarIcon: ({ tintColor }) => <MaterialIcons name="map" size={24} color={tintColor} />
        },
      },
      Launchs,
      ProfileUpdate,
    }, {
      tabBarOptions: {
        activeTintColor: '#FFF',
        style: { backgroundColor: '#111' }
      },
    }),
  })
);