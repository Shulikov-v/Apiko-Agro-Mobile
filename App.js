import React from 'react';
import { Provider } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { BackAndroid } from 'react-native';

import store from './src/redux/store';
import AppViewContainer from './src/AppViewContainer';


export default class App extends React.Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  }

  navigateBack() {
    const navigatorState = store.getState().navigatorState;

    const currentStackScreen = navigatorState.index;
    const currentTab = navigatorState.routes[0].index;

    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    }

    // otherwise let OS handle the back button action
    return false;
  }

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}
