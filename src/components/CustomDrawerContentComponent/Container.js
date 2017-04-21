import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { NavigationActions } from 'react-navigation';

import View from './View';

const enhance = compose(
  connect(
    null,
    dispatch => {
      return {
        navigate: bindActionCreators(NavigationActions.navigate, dispatch)
      };
    }
  ),
);

export default enhance(View);
