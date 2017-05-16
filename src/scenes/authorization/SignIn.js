import { compose } from 'recompose';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import { signIn } from './AuthorizationState';
import AuthForm, { authFormTypes } from '../../components/AuthForm';


const LogIn = ({ onSignIn, loading, error, navigation }) => (
  <AuthForm
    type={authFormTypes.SIGN_IN}
    onSignIn={onSignIn}
    loading={loading}
    error={error}
    navigation={navigation}
  />
);

LogIn.propTypes = {
  onSignIn: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const enhance = compose(
  connect(mapStateToProps, {
    onSignIn: signIn,
  }),
);

export default enhance(LogIn);
