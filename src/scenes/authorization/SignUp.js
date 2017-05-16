import { compose } from 'recompose';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import { signUp } from './AuthorizationState';
import AuthForm, { authFormTypes } from '../../components/AuthForm';


const Register = ({ onSignUp, loading, navigation }) => (
  <AuthForm
    type={authFormTypes.SIGN_UP}
    onSignUp={onSignUp}
    loading={loading}
    navigation={navigation}
  />
);

Register.propTypes = {
  onSignUp: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading
});

const enhance = compose(
  connect(mapStateToProps, {
    onSignUp: signUp,
  }),
);

export default enhance(Register);
