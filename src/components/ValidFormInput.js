import React, { Component, PropTypes } from 'react';
import { Text, TextInput, View } from 'react-native';
import colors from '../styles/common/colors';
import styles from '../styles/FormInputStyles';

class ValidFormInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.props.onChangeText({
      text,
      isValid: this.props.validate(text),
      isTouched: true,
    });
  }

  render() {
    const {
      value,
      containerStyle,
      label,
      labelStyle,
      labelOnErrorStyle,
      inputProps,
      inputStyle,
      inputContainerStyle,
      inputContainerOnErrorStyle,
      errorText,
      errorTextStyle,
    } = this.props;

    const { text, isValid, isTouched } = value;
    const showError = isTouched && !isValid;

    return (
      <View style={[styles.containerStyle, containerStyle]}>
        {label && (
          <Text
            style={[
              styles.labelStyle,
              labelStyle,
              showError && styles.labelOnErrorStyle,
              showError && labelOnErrorStyle,
            ]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            styles.inputContainerStyle,
            inputContainerStyle,
            showError && styles.inputContainerOnErrorStyle,
            showError && inputContainerOnErrorStyle,
          ]}
        >
          <TextInput
            autoCapitalize="none"
            selectionColor={colors.defaultPrimary}
            {...inputProps}
            underlineColorAndroid={'transparent'}
            style={[styles.inputStyle, inputStyle]}
            value={text}
            onChangeText={this.onChangeText}
          />
        </View>
        {showError && errorText && (
          <Text style={[styles.errorTextStyle, errorTextStyle]}>{errorText}</Text>
        )}
      </View>
    );
  }
}

ValidFormInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  value: PropTypes.shape({
    text: PropTypes.string,
    isValid: PropTypes.bool,
    isTouched: PropTypes.bool,
  }),
  containerStyle: PropTypes.object,
  label: PropTypes.string,
  labelOnErrorStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  inputProps: PropTypes.object,
  inputStyle: PropTypes.object,
  inputContainerStyle: PropTypes.object,
  inputContainerOnErrorStyle: PropTypes.object,
  errorText: PropTypes.string,
  errorTextStyle: PropTypes.object,
};

export default ValidFormInput;
