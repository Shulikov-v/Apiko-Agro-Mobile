import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import R from 'ramda';
import { isValidEmail, isValidPassword } from '../utils/validateText';
import authFormTypes from '../constants/authFormTypes';
import ValidInput from './ValidFormInput';
import Loading from './Loading';
import showError from '../utils/showErrorAlert';
import styles from '../styles/AuthFormStyles';
import colors from '../styles/common/colors';

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
              label="EMAIL"
              onChangeText={this.onChangeInput('email')}
              validate={isValidEmail}
              value={email}
              inputProps={{ placeholder: 'Type your email here' }}
              errorText="Email is not valid"
            />
            {authFormType === SIGN_UP && (
              <ValidInput
                label="NAME"
                onChangeText={this.onChangeInput('name')}
                validate={R.complement(R.isEmpty)}
                value={name}
                inputProps={{ placeholder: 'Type your name here' }}
                errorText="Name is required"
              />
            )}
            {authFormType === SIGN_UP && (
              <ValidInput
                label="SURNAME"
                onChangeText={this.onChangeInput('surname')}
                validate={R.complement(R.isEmpty)}
                value={surname}
                inputProps={{ placeholder: 'Type your surname here' }}
                errorText="Surname is required"
              />
            )}
            <ValidInput
              label="PASSWORD"
              onChangeText={this.onChangeInput('password')}
              validate={isValidPassword}
              value={password}
              inputProps={{ placeholder: 'Type your password here', secureTextEntry: true }}
              errorText="Must have 6 or more characters"
            />
            {authFormType === SIGN_UP && (
              <ValidInput
                label="CONFIRM PASSWORD"
                onChangeText={this.onChangeInput('passwordConfirm')}
                validate={R.equals(password.text)}
                value={passwordConfirm}
                inputProps={{ placeholder: 'Confirm password', secureTextEntry: true }}
                errorText="Not equals to previous password"
              />
            )}
            <Button
              buttonStyle={styles.buttonStyle}
              title={authFormType === SIGN_UP ? 'REGISTER' : 'LOGIN'}
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
                  'Already a member? Login' :
                  'No account yet? Create one'
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

export default AuthForm;
