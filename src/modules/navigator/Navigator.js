import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import MapViewContainer from '../../scenes/map/MapViewContainer';
import CustomDrawerContentComponent from '../../components/CustomDrawerContentComponent';

import defaultHeaderConfig from './defaultHeaderConfig';


const MapNavigator = StackNavigator({
  Map: {
    screen: MapViewContainer,
  }
}, {
  navigationOptions: {
    title: 'Map',
    header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation))
  }
});

const AppNavigator = DrawerNavigator({
  Map: { screen: MapNavigator },
}, {
  drawerWidth: 260,
  contentComponent: CustomDrawerContentComponent
});

export default AppNavigator;
