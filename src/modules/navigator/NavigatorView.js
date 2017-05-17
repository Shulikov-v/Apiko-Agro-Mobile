import React, { PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './Navigator';

const NavigatorView = ({ navigatorState, dispatch }) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
        dispatch,
        state: navigatorState,
      })
    }
  />
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default NavigatorView;
