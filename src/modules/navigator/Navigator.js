import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import CustomDrawerContentComponent from '../../components/CustomDrawerContentComponent/Container';
import MapViewContainer from '../../scenes/map/MapViewContainer';
import OrganizationContainer from '../../scenes/organization/OrganizationContainer';
import * as dictionaries from '../../scenes/dictionaries';
import ProfileContainer from '../../scenes/profile/ProfileContainer';

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

const OrganizationNavigator = StackNavigator({
  OrganizationPage: {
    screen: OrganizationContainer,
  }
}, {
  navigationOptions: {
    title: 'Organization',
    header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation))
  }
});

const TabNavigatorContainer = TabNavigator({
  Areas: { screen: dictionaries.Areas },
  Fields: { screen: dictionaries.Fields },
  Landlords: { screen: dictionaries.Landlords },
  RentContracts: {
    screen: dictionaries.RentContracts,
    navigationOptions: { title: 'Rent Contracts' },
  },
  Renters: { screen: dictionaries.Renters },
}, {
  tabBarOptions: {
    scrollEnabled: true,
  }
});

const DictionariesNavigator = StackNavigator({
  DictionariesPage: { screen: TabNavigatorContainer }
}, {
  navigationOptions: {
    title: 'Dictionaries',
    header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation))
  }
});

const ProfileNavigator = StackNavigator({
  ProfilePage: { screen: ProfileContainer }
}, {
  navigationOptions: {
    title: 'Profile',
    header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation))
  }
});

const AppNavigator = DrawerNavigator({
  Map: { screen: MapNavigator },
  Organization: { screen: OrganizationNavigator },
  Dictionaries: { screen: DictionariesNavigator },
  Profile: { screen: ProfileNavigator },
}, {
  drawerWidth: 260,
  contentComponent: CustomDrawerContentComponent
});

export default AppNavigator;
