import R from 'ramda';
import { Button } from 'react-native-elements';
import { translate } from 'react-native-translate';
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import Loading from './Loading';
import ValidInput from './ValidFormInput';
import colors from '../styles/colors';
import normalize from '../utils/normalizeText';
import showError from '../utils/showErrorAlert';
import { isValidEmail, isValidPassword } from '../utils/validateText';

const authFormTypes = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
};

const { SIGN_UP, SIGN_IN } = authFormTypes;

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: { text: 'mykola@jssolutionsdev.com' },
      name: {},
      surname: {},
      password: { text: 'agro' },
      passwordConfirm: {},
    };

    this.resetState = this.state;

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAuth = this.onAuth.bind(this);
    this.onChangeAuthScene = this.onChangeAuthScene.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && !prevProps.error) {
      showError(this.props.error);
    }
  }

  onChangeInput(key) {
    return (value) => {
      const newState = { [key]: value };
      if (key === 'password') {
        Object.assign(newState, { passwordConfirm: {} });
      }

      this.setState(newState);
    };
  }

  onAuth() {
    const { email, name, surname, password } = this.state;
    const { type, onSignUp, onSignIn } = this.props;

    const authFn = type === SIGN_UP ? onSignUp : onSignIn;

    this.setState(this.resetState);

    authFn({
      email: email.text,
      name: name.text,
      surname: surname.text,
      password: password.text,
    });
  }

  onChangeAuthScene() {
    console.log('onChangeAuthScene');
    const next = this.props.type === SIGN_UP ? 'SignIn' : 'SignUp';
    this.setState(this.resetState);
    this.props.navigation.navigate(next);
  }

  isFormValid() {
    const { email, name, surname, password, passwordConfirm } = this.state;
    const isSingUpFieldsValid = this.props.type === SIGN_UP ?
      passwordConfirm.isValid && name.isValid && surname.isValid : true;

    // return email.isValid && password.isValid && isSingUpFieldsValid;
    return email.isValid  && isSingUpFieldsValid;
  }

  render() {
    const { type: authFormType, loading } = this.props;
    const { email, name, surname, password, passwordConfirm } = this.state;

    return (
      <View style={styles.rootStyle}>
        {loading ? (
          <Loading size={60} thickness={5} />
        ) : (
          <View>
            <ValidInput
              label={translate('email')}
              onChangeText={this.onChangeInput('email')}
              validate={isValidEmail}
              value={email}
              inputProps={{ placeholder: translate('email_placeholder') }}
              errorText={translate('invalid_email')}
            />
            {authFormType === SIGN_UP && (
              <ValidInput
                label={translate('name')}
                onChangeText={this.onChangeInput('name')}
                validate={R.complement(R.isEmpty)}
                value={name}
                inputProps={{ placeholder: translate('name_placeholder') }}
                errorText={translate('name_required')}
              />
            )}
            {authFormType === SIGN_UP && (
              <ValidInput
                label={translate('surname')}
                onChangeText={this.onChangeInput('surname')}
                validate={R.complement(R.isEmpty)}
                value={surname}
                inputProps={{ placeholder: translate('surname_placeholder') }}
                errorText={ translate('surname_required') }
              />
            )}
            <ValidInput
              label={translate('password')}
              onChangeText={this.onChangeInput('password')}
              validate={isValidPassword}
              value={password}
              inputProps={{ placeholder: translate('password_placeholder'), secureTextEntry: true }}
              errorText={ translate('password_error') }
            />
            {authFormType === SIGN_UP && (
              <ValidInput
                label={translate('password_confirm')}
                onChangeText={this.onChangeInput('passwordConfirm')}
                validate={R.equals(password.text)}
                value={passwordConfirm}
                inputProps={{ placeholder: translate('password_placeholder'), secureTextEntry: true }}
                errorText={ translate('password_error_not_equal') }
              />
            )}
            <Button
              buttonStyle={styles.buttonStyle}
              title={authFormType === SIGN_UP ? translate('register') : translate('login')}
              onPress={this.onAuth}
              disabled={!this.isFormValid()}
              raised
              backgroundColor={colors.defaultPrimary}
            />
            <TouchableOpacity
              style={styles.linkStyle}
              onPress={this.onChangeAuthScene}
            >
              <Text style={styles.linkTextStyle}>
                {authFormType === SIGN_UP ?
                  translate('sign_in') :
                  translate('sign_up')
                }
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.oneOf([SIGN_UP, SIGN_IN]).isRequired,
  onSignUp: PropTypes.func,
  onSignIn: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  buttonStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
  linkStyle: {
    alignItems: 'center',
  },
  linkTextStyle: {
    fontSize: normalize(16),
  },
});

export { authFormTypes };
export default AuthForm;
