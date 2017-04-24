import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import SignIn from '../../scenes/authorization/SignIn';
import SignUp from '../../scenes/authorization/SignUp';
import * as dictionaries from '../../scenes/dictionaries';
import MapViewContainer from '../../scenes/map/MapViewContainer';
import ProfileContainer from '../../scenes/profile/ProfileContainer';
import OrganizationContainer from '../../scenes/organization/OrganizationContainer';
import CustomDrawerContentComponent from '../CustomDrawerContentComponent/Container';

import { getAuthenticationToken } from '../../utils/authentication';
import getNavigationOptionsByScene from './getNavigationOptionsByScene';

const MapNavigator = StackNavigator({
  Map: { screen: MapViewContainer }
}, getNavigationOptionsByScene('Map'));

const OrganizationNavigator = StackNavigator({
  OrganizationPage: { screen: OrganizationContainer }
}, getNavigationOptionsByScene('Organization'));

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
}, getNavigationOptionsByScene('Dictionaries'));

const ProfileNavigator = StackNavigator({
  ProfilePage: { screen: ProfileContainer }
}, getNavigationOptionsByScene('Profile'));

const MainDrawer = DrawerNavigator({
  Map: { screen: MapNavigator },
  Organization: { screen: OrganizationNavigator },
  Dictionaries: { screen: DictionariesNavigator },
  Profile: { screen: ProfileNavigator },
}, {
  drawerWidth: 260,
  contentComponent: CustomDrawerContentComponent
});

const AuthNavigator = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
}, { ...getNavigationOptionsByScene('Apiko Agro'), headerMode: 'none' });

const AppNavigator = StackNavigator({
  MainDrawer: { screen: MainDrawer },
  Authorization: { screen: AuthNavigator }
}, {
  initialRouteName: getAuthenticationToken()._65 ? 'MainDrawer' : 'Authorization',
  headerMode: 'none',
});

export default AppNavigator;
