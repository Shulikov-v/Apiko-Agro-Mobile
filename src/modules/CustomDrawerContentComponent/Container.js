import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { signOut } from '../../scenes/authorization/AuthorizationState';

import View from './View';

const enhance = compose(
  connect(
    null,
    dispatch => {
      return {
        signOut: signOut(dispatch)
      };
    }
  ),
);

export default enhance(View);
