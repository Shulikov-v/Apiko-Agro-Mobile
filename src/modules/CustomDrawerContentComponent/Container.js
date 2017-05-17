import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { signOut } from '../../scenes/authorization/AuthorizationState';

import View from './View';

const enhance = compose(
  connect(
    null,
    { signOut }
  ),
);

export default enhance(View);
